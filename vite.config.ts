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
    rollupOptions: {
      output: {
        manualChunks(id) {
          // عزل مكتبة Three.js والملفات التابعة لها في ملف مستقل لتسريع التحميل الأول للموقع
          if (id.includes("node_modules/three") || id.includes("node_modules/@react-three")) {
            return "three-js";
          }
        },
      },
    },
  },
}));
