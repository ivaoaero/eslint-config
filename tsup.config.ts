import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/**/*.ts'],
  splitting: false,
  bundle: false,
  sourcemap: false,
  clean: true,
  minify: true,
  dts: true,
  format: ['esm'],
});
