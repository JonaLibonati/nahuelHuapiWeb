// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
/* export default defineConfig({
  site: 'https://nahuelhuapi4265.com',
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [sitemap()]
}); */


export default defineConfig({
  site: 'https://jonalibonati.github.io/nahuelHuapiWeb',
  base: '/nahuelHuapiWeb',
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [sitemap()]
});