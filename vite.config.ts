import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { svgBuilder } from "./src/icons/loader";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), svgBuilder("./src/icons/svg/")],
  base: "./",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  },
  server: {
    port: 1088,
    host: "0.0.0.0",
    // proxy: {
    //   "/free": {
    //     target: "https://www.tianqiapi.com",
    //     changeOrigin: true,
    //     rewrite: path => path.replace(/^\//, "")
    //   }
    // }
  },
  build: {
    rollupOptions: {
      output: {
        // manualChunks: {
        //   "packgage-name": ["file-name"],
        //   "element-plus": ["element-plus"],
        // },
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor";
          }
        }
      }
    }
  },
})
