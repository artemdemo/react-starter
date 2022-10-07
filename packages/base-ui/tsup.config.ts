import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  splitting: true,
  format: ['esm'],
  dts: true,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom'],
  injectStyle: true,
});
