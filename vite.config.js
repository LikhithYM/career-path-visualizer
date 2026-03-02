import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/<your‑repo‑name>/',   // e.g. '/academic‑tree/'
  plugins: [react()],
})