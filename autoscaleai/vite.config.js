import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss()
  ],
  server: {
    host: 'hackstreetboys2026.com',
    port: 3000, 
  },
  base: '/public/',
})  