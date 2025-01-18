import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/ali-portfolio/', // Ganti dengan nama repository GitHub Anda
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
