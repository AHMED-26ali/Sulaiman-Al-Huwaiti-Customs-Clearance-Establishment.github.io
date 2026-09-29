import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// إضافة تحسين تحميل الـ CSS الأولي بأعلى أولوية ممكنة
function optimizeCssPlugin(): Plugin {
  return {
    name: 'optimize-css-plugin',
    apply: 'build',
    enforce: 'post',
    transformIndexHtml(html) {
      // إبقاء ملف الـ CSS الأساسي عالي الأولوية مع Preload لضمان FCP سريع جداً دون تأخير أو وميض
      return html.replace(
        /<link rel="stylesheet" crossorigin href="(\/assets\/[^"]+\.css)">/g,
        `<link rel="preload" href="$1" as="style">
  <link rel="stylesheet" crossorigin href="$1">`
      );
    },
  };
}

export default defineConfig(({ mode }) => ({
  server: {
    host: "0.0.0.0",
    port: 3000,
  },
  plugins: [react(), optimizeCssPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: 'es2022', // استهداف es2022 لإنتاج جافاسكريبت أصغر وأسرع بكثير دون Polyfills ثقيلة
    cssCodeSplit: true,
    minify: 'esbuild',
    sourcemap: false,
    chunkSizeWarningLimit: 1000,
    assetsInlineLimit: 4096,
    
    rollupOptions: {
      output: {
        manualChunks(id) {
          // فصل مكتبة 3D الثقيلة لتحميلها فقط عند الحاجة التامة
          if (id.includes("node_modules/three") || id.includes("node_modules/@react-three")) {
            return "three-vendor";
          }
          // فصل مكتبة الحركات framer-motion لتأجيلها
          if (id.includes("node_modules/framer-motion")) {
            return "motion-vendor";
          }
          // فصل مكتبات React الأساسية
          if (id.includes("node_modules/react") || id.includes("node_modules/react-dom") || id.includes("node_modules/react-router")) {
            return "react-vendor";
          }
          // فصل مكتبة الأيقونات
          if (id.includes("node_modules/lucide-react")) {
            return "icons-vendor";
          }
          // فصل مكتبات UI
          if (id.includes("node_modules/@radix-ui") || 
              id.includes("node_modules/class-variance-authority") || 
              id.includes("node_modules/clsx") || 
              id.includes("node_modules/tailwind-merge")) {
            return "ui-vendor";
          }
          // فصل مكتبات الاستعلام
          if (id.includes("node_modules/@tanstack")) {
            return "query-vendor";
          }
        },
      },
    },
  },
  // تحسينات CSS
  css: {
    devSourcemap: true,
  },
}));
