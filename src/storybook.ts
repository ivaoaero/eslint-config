import storybook from 'eslint-plugin-storybook';
import tseslint from 'typescript-eslint';

import type { Config } from 'typescript-eslint';

export default tseslint.config(
  ...storybook.configs['flat/recommended'],
) as Config[];
