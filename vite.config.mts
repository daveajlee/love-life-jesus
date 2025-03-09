import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
  return {
    base: "/love-life-jesus/",
    build: {
      outDir: 'build',
    },
    plugins: [react()],
  };
});