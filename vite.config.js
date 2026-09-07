import { defineConfig } from 'vite';
export default defineConfig({
  // Relative assets keep the archive portable and work beneath a GitHub project path.
  base: './',
  build: { outDir: 'dist', emptyOutDir: true, sourcemap: false }
});
