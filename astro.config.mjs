import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  build: {
    inlineStylesheets: 'auto'
  },
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  },
  vite: {
    build: {
      cssMinify: true
    }
  }
});
