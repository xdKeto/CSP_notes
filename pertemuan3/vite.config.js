import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build:{
    rollupOptions:{
      input: {
        index: 'index.html',
        counter: 'counter.html',
        todo: 'todo.html',
        blog: 'blog.html'
      }
    }
  }
})
