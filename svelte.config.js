import adapter from "@sveltejs/adapter-auto";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config}*/
const config = {
  preprocess: [vitePreprocess()],
  kit: {
    adapter: adapter(),
    files: {
      routes: "src/app/routes", // move routing inside the app layer
      lib: "src",
      appTemplate: "src/app/index.html", // Move the application entry point inside the app layer
      assets: "public",
    },
    alias: {
      "@/*": "src/*", // Create an alias for the src directory
    },
  },
};
export default config;
