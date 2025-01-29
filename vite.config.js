import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { fileURLToPath, URL } from "url";
import { imagetools } from 'vite-imagetools';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    imagetools(),  
  ],
  build: {
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor";  
          }
        },
      },
    },
    assetsInlineLimit: 4096,  
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  assetsInclude: ["**/*.jpg", "**/*.png", "**/*.svg", "**/*.webp"],
})
