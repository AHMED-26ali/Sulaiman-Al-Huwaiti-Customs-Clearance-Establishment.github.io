import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";

const rawVersion = process.env.VERCEL_GIT_COMMIT_SHA ||
  process.env.GIT_COMMIT_SHA ||
  process.env.GITHUB_SHA ||
  process.env.COMMIT_REF ||
  process.env.VITE_APP_VERSION ||
  'v2026.04.1';
const appVersion = String(rawVersion).substring(0, 12);
const buildTime = new Date().toISOString();

// كتابة ملف version.json في مجلد public تلقائياً عند التشغيل أو البناء
try {
  const publicDir = path.resolve(__dirname, 'public');
  if (fs.existsSync(publicDir)) {
    fs.writeFileSync(
      path.join(publicDir, 'version.json'),
      JSON.stringify(
        {
          version: appVersion,
          buildTime,
          chatSchemaVersion: 2,
          service: 'Sulaiman Al-Huwaiti AI Assistant'
        },
        null,
        2
      ),
      'utf8'
    );
  }
} catch {
  // ignore
}

// Keep the single Vite-generated stylesheet; avoid redundant CSS preload hints.
function versionFilePlugin(): Plugin {
  return {
    name: 'version-file-plugin',
    generateBundle() {
      this.emitFile({
        type: 'asset',
        fileName: 'version.json',
        source: JSON.stringify(
          {
            version: appVersion,
            buildTime,
            chatSchemaVersion: 2,
            service: 'Sulaiman Al-Huwaiti AI Assistant'
          },
          null,
          2
        )
      });
    }
  };
}

export default defineConfig(({ mode }) => ({
  define: {
    __APP_VERSION__: JSON.stringify(appVersion),
    __BUILD_TIME__: JSON.stringify(buildTime),
  },
  server: {
    host: "0.0.0.0",
    port: 3000,
  },
  plugins: [react(), versionFilePlugin()],
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
