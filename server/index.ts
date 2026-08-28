import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createApp } from './app';

const currentDir = path.dirname(fileURLToPath(import.meta.url));
const staticDir = path.resolve(currentDir, '../client');
const port = Number.parseInt(process.env.PORT || '8080', 10);

createApp({ staticDir }).listen(port, '0.0.0.0', () => {
  console.info(JSON.stringify({ event: 'server_started', port, preview: process.env.PREVIEW_MODE !== 'false' }));
});

