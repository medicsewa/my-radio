import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: [
      "ae1a-2400-1a00-b050-c1f6-d98f-9954-39f8-3b52.ngrok-free.app",
    ],
  },
});
