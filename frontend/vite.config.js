import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // base: '/my-project-front/',
  plugins: [react()],
  server: {
    proxy: {
      "/api":        
      { target: "https://djangoapp-s1x8.onrender.com/",
      // { target: "http://localhost:8000",
        changeOrigin: true,
        secure:false,
        // other proxy options
      },
      
    },
    port: 3000,
  },
});
