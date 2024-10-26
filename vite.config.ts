import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000, // вказує порт, на якому працює сервер
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // проксі для бекенду
        changeOrigin: true,
        secure: false,
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "@/styles/variables" as *;', // автоматичний імпорт змінних стилів
      },
    },
  },
  build: {
    sourcemap: true, // зручніше для налагодження у продакшні
    rollupOptions: {
      output: {
        manualChunks: {
          vue: ['vue'],
        },
      },
    },
  },
  optimizeDeps: {
    include: ['axios'], // специфічні залежності, які Vite має оптимізувати
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.ts', // опціонально, якщо у вас є початкові файли
    coverage: {
      reporter: ['text', 'json', 'html'], // репортери покриття
      provider: 'v8', // використовуйте c8 для покриття
      include: ['src/**/*.ts', 'src/**/*.vue'], // файли, які потрібно покривати тестами
      exclude: ['node_modules', 'tests'], // виключення
    },
  },
});
