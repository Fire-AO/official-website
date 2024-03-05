import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from 'path';
const __dirname = path.resolve();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  },
  server: {
    proxy: {
      "/register": {
        target: "https://localhost:3000/",
        secure: false,
        changeOrigin: true,
      },
    },
    port: 3002,
  },
});
