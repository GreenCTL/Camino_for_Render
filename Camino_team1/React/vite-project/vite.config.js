import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path' // ✅ 補上這行！
import { fileURLToPath } from 'url'
import path from 'path';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  root: '.', // 保持當前根目錄（Render 指向這層）
  base: './',
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: resolve(__dirname, 'src/index.html')  // 👉 指定 index.html 路徑
    }
  },
})
