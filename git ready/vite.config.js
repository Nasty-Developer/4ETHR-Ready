import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const configuredPort = Number(process.env.PORT);
const port = Number.isFinite(configuredPort) && configuredPort > 0
  ? configuredPort
  : 5173;

export default defineConfig({
  base: process.env.BASE_PATH || '/',
  plugins: [react()],
  build: {
    outDir: 'dist/public',
    emptyOutDir: true,
  },
  server: {
    port,
    strictPort: Boolean(process.env.PORT),
    host: '0.0.0.0',
  },
  preview: {
    port,
    host: '0.0.0.0',
  },
});