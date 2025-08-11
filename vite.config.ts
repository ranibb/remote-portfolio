// vite.config.ts in the REMOTE-PORTFOLIO project

import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";
import federation from "@originjs/vite-plugin-federation"; // <-- Import the federation plugin

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    // Add the federation plugin to your existing plugins array
    federation({
      name: "portfolio_app", // A unique name for this remote app
      filename: "remoteEntry.js", // The manifest file
      exposes: {
        // What we are sharing. The key is the path the host will use.
        "./PortfolioSummary": "./src/components/PortfolioSummary.vue",
      },
      shared: ["vue"], // Libraries to share with the host
    }),
  ],
  build: {
    target: "esnext", // Add this build configuration
  },
  preview: {
    port: 5001,
  },
  server: {
    port: 5174,
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
