import { createRequire } from 'node:module';

import { type Config } from 'eslint/config';

import base from './base.js';
import prettier from './prettier.js';
import react from './react.js';

const loadModule = createRequire(import.meta.url);

const storybook = (): Config[] => {
  try {
    loadModule.resolve('eslint-plugin-storybook');
  } catch (cause) {
    throw new Error(
      "Please install 'eslint-plugin-storybook' to use the Storybook config.",
      { cause },
    );
  }

  const storybookModule = loadModule('./storybook.mjs') as {
    default: Config[];
  };

  return storybookModule.default;
};

export default {
  configs: {
    base,
    prettier,
    react,
    storybook,
  },
  setups: {
    reactRecommended: [...base, ...prettier, ...react],
    reactRecommendedNoPrettier: [...base, ...react],
  },
} satisfies {
  configs: Record<'base' | 'prettier' | 'react', Config[]> & {
    storybook: () => Config[];
  };
  setups: Record<'reactRecommended' | 'reactRecommendedNoPrettier', Config[]>;
};
