import path from 'path';
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

const previewOrigin = 'https://bobuel.github.io/aydoon';
const productionOrigin = 'https://aydoon.com';

export default defineConfig(({ mode }) => {
  const isProductionPages = mode === 'production-pages';
  const siteOrigin = isProductionPages ? productionOrigin : previewOrigin;
  const robotsDirective = isProductionPages ? 'index, follow' : 'noindex, nofollow';

  return {
    base: mode === 'pages' ? '/aydoon/' : '/',
    server: {
      port: 3000,
      host: '127.0.0.1',
    },
    define: {
      'import.meta.env.VITE_SITE_ORIGIN': JSON.stringify(siteOrigin),
    },
    plugins: [
      react(),
      {
        name: 'site-deployment-metadata',
        transformIndexHtml(html) {
          return html
            .replaceAll('__SITE_ORIGIN__', siteOrigin)
            .replaceAll('__ROBOTS_DIRECTIVE__', robotsDirective);
        },
      },
    ],
    build: {
      outDir: 'dist',
      emptyOutDir: true,
    },
    test: {
      environment: 'jsdom',
      setupFiles: ['./tests/setup.ts'],
      css: true,
      globals: true,
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
  };
});
