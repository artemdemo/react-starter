import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts', 'src/BaseUiProvider/BaseUiProvider.tsx'],
  splitting: true,
  format: ['esm'],
  target: 'es2020',
  dts: true,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom', 'react-router-dom'],
  injectStyle: true,
});
