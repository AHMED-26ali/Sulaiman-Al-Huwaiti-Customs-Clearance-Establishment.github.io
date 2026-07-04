import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ mode }) => ({
  plugins: [react()],
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
