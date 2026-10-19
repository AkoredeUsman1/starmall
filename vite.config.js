import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    // Force a single copy of React even though a stray node_modules
    // exists one folder above this project.
    dedupe: ['react', 'react-dom'],
  },
})
