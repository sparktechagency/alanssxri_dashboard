import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
    server: {
    host: '0.0.0.0',
    port: 4173
  },
    preview: {
    host: '0.0.0.0',
    port: 5173,
    allowedHosts: ['dashboard.laeatery.com']
  }
})
