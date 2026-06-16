import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { viteSourceLocator } from "@metagptx/vite-plugin-source-locator";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    viteSourceLocator({
      prefix: "mgx",
    }),
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: 'esnext', // استخدام أحدث تقنيات الجافاسكريبت لتسريع وتحسين قراءة الملفات
    cssCodeSplit: true, // تقسيم ملفات الـ CSS حتى لا تبطئ عرض الصفحة الأول
    sourcemap: false, // إزالة الـ sourcemaps في production لتقليل الحجم
    minify: 'esbuild', // استخدام esbuild للسرعة (أو 'terser' للضغط الأفضل)
    
    // إعدادات esbuild لحذف الكود غير المستخدم
    esbuild: {
      drop: ['console', 'debugger'], // حذف console.log و debugger في production
    },
    
    rollupOptions: {
      output: {
        manualChunks(id) {
          // 1. فصل مكتبة 3D الثقيلة في ملف مستقل
          if (id.includes("node_modules/three") || id.includes("node_modules/@react-three")) {
            return "three-vendor";
          }
          // 2. فصل مكتبات React الأساسية في ملف مستقل
          if (id.includes("node_modules/react") || id.includes("node_modules/react-dom") || id.includes("node_modules/react-router")) {
            return "react-vendor";
          }
          // 3. فصل مكتبة الأيقونات في ملف مستقل
          if (id.includes("node_modules/lucide-react")) {
            return "icons-vendor";
          }
          // 4. فصل مكتبات UI في ملف مستقل (جديد)
          if (id.includes("node_modules/@radix-ui") || 
              id.includes("node_modules/class-variance-authority") || 
              id.includes("node_modules/clsx") || 
              id.includes("node_modules/tailwind-merge")) {
            return "ui-vendor";
          }
          // 5. فصل مكتبات utilities في ملف مستقل (جديد)
          if (id.includes("node_modules/framer-motion") || 
              id.includes("node_modules/@tanstack")) {
            return "utils-vendor";
          }
        },
        // تنظيم أسماء الملفات في مجلدات
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          // تنظيم الملفات حسب النوع
          if (assetInfo.name && /\.(png|jpe?g|gif|svg|webp|avif)$/i.test(assetInfo.name)) {
            return 'assets/images/[name]-[hash][extname]';
          }
          if (assetInfo.name && /\.(woff2?|eot|ttf|otf)$/i.test(assetInfo.name)) {
            return 'assets/fonts/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
    // حد تحذير حجم الملف
    chunkSizeWarningLimit: 1000,
    // تحويل الصور الصغيرة (< 4KB) لـ base64 لتقليل عدد الطلبات
    assetsInlineLimit: 4096,
  },
  // تحسين الـ CSS
  css: {
    devSourcemap: true,
  },
  // تحسين الـ Server في development
  server: {
    port: 3000,
    open: true,
  },
}));
