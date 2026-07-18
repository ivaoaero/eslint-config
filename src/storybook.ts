import storybook from 'eslint-plugin-storybook';
import { defineConfig } from 'eslint/config';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export default defineConfig(storybook.configs['flat/recommended']);
