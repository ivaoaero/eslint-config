import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: ['src/**/*.ts'],
  unbundle: true,
  sourcemap: false,
  clean: true,
  minify: true,
  dts: true,
  format: ['esm'],
});
