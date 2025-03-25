import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts', 'src/tailwind.ts'],
  splitting: false,
  sourcemap: false,
  clean: false,
  minify: true,
  dts: true,
  format: ['esm'],
});
