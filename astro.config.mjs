import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";

export default defineConfig({
  site: "https://deporgo.com",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  },
  adapter: vercel(),
  output: "server"
});
