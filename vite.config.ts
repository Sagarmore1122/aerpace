import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react(), componentTagger()],
  root: '.', // keep this if your index.html is in root
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // ✅ this fixes the "@/..." import
    },
  },
  build: {
    rollupOptions: {
      input: 'index.html',
    },
  },
}));
