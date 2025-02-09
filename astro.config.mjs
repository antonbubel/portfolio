import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";

const siteUrl = process.env.BASE_URL || "https://antonbubel.com";

// https://astro.build/config
export default defineConfig({
  site: siteUrl,
  output: "server",
  adapter: vercel({
    isr: true,
    webAnalytics: {
      enabled: true,
    },
  }),
  integrations: [
    tailwind(),
    sitemap(),
    robotsTxt({
      sitemap: [`${siteUrl}/sitemap-index.xml`, `${siteUrl}/sitemap-0.xml`],
    }),
  ],
});
