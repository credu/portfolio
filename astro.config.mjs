// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: "https://jesus-mendoza.vercel.app",
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "en",
  },
  trailingSlash: "never",
  vite: {
    plugins: [tailwindcss()]
  }
});