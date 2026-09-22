import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// إضافة إضافة تجعل تحميل الـ CSS الأولي غير حاجب للعرض مع ضمان تطبيق التنسيق الفوري
function asyncCssPlugin(): Plugin {
  return {
    name: 'async-css-plugin',
    apply: 'build',
    enforce: 'post',
    transformIndexHtml(html) {
      // تحويل وسم <link rel="stylesheet" href="..."> المولّد تلقائياً ليكون غير حاجب للعرض
      return html.replace(
        /<link rel="stylesheet" crossorigin href="(\/assets\/[^"]+\.css)">/g,
        `<link rel="preload" href="$1" as="style">
  <link rel="stylesheet" crossorigin href="$1" media="print" onload="this.media='all'">
  <noscript><link rel="stylesheet" crossorigin href="$1"></noscript>`
      );
    },
  };
}

export default defineConfig(({ mode }) => ({
  server: {
    host: "0.0.0.0",
    port: 3000,
  },
  plugins: [react(), asyncCssPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: 'es2015', // تغيير من esnext إلى es2015 للتوافق الأفضل وحجم أصغر
    cssCodeSplit: true,
    minify: 'esbuild', // استخدام esbuild للسرعة
    sourcemap: false, // إزالة الـ sourcemaps في production لتقليل الحجم
    
    // تحسينات إضافية
    chunkSizeWarningLimit: 1000, // زيادة حد التحذير
    assetsInlineLimit: 4096, // تحويل الصور الصغيرة (< 4KB) لـ base64
    
    rollupOptions: {
      output: {
        manualChunks(id) {
          // فصل مكتبة 3D الثقيلة
          if (id.includes("node_modules/three") || id.includes("node_modules/@react-three")) {
            return "three-vendor";
          }
          // فصل مكتبات React الأساسية
          if (id.includes("node_modules/react") || id.includes("node_modules/react-dom") || id.includes("node_modules/react-router")) {
            return "react-vendor";
          }
          // فصل مكتبة الأيقونات
          if (id.includes("node_modules/lucide-react")) {
            return "icons-vendor";
          }
          // فصل مكتبات UI (جديد)
          if (id.includes("node_modules/@radix-ui") || 
              id.includes("node_modules/class-variance-authority") || 
              id.includes("node_modules/clsx") || 
              id.includes("node_modules/tailwind-merge")) {
            return "ui-vendor";
          }
          // فصل مكتبات utilities (جديد)
          if (id.includes("node_modules/framer-motion") || 
              id.includes("node_modules/@tanstack")) {
            return "utils-vendor";
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
