import { fileURLToPath } from "node:url";
import { defineConfig } from "astro/config";

const prerenderEntrypoint = fileURLToPath(new URL("./node_modules/astro/dist/entrypoints/prerender.js", import.meta.url));
const legacyEntrypoint = fileURLToPath(new URL("./node_modules/astro/dist/entrypoints/legacy.js", import.meta.url));

export default defineConfig({
  integrations: [],
  output: "static",
  vite: {
    resolve: {
      alias: {
        "astro/entrypoints/legacy": legacyEntrypoint,
        "astro/entrypoints/prerender": prerenderEntrypoint
      }
    }
  }
});
