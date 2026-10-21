import { defineConfig } from 'astro/config';
export default defineConfig({
  site: 'https://softmetrics.co',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
