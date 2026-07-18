import tailwind from 'eslint-plugin-tailwindcss';
import { defineConfig } from 'eslint/config';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export default defineConfig(tailwind.configs.recommended, {
  rules: {
    'tailwindcss/classnames-order': 'error',
  },
});
