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
        },
      },
    },
  },
}));
