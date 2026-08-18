import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// Tailwind's Vite plugin was not installed; remove invalid import.

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
