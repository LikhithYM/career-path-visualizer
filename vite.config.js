import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // Netlify deploys from root
  build: {
    outDir: 'dist', // Netlify expects dist/
    emptyOutDir: true,
  },
  plugins: [react()],
});