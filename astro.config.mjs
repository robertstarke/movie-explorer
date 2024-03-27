import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";

export default defineConfig({
  integrations: [tailwind(), alpinejs()],
  output: "static",
  site: "https://www.rstarke.com",
  base: "movie-db"
  
});
