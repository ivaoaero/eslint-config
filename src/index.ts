import { type Config } from 'typescript-eslint';

import base from './base.js';
import prettier from './prettier.js';
import react from './react.js';

export default {
  configs: {
    base,
    prettier,
    react,
    storybook: () => {
      try {
        // eslint-disable-next-line @typescript-eslint/no-require-imports,@typescript-eslint/no-unused-expressions,@typescript-eslint/no-unsafe-member-access
        require('eslint-plugin-storybook/package.json').version;

        // eslint-disable-next-line @typescript-eslint/no-require-imports
        return require('./storybook.js') as Config[];
      } catch {
        throw new Error(
          "Please install 'eslint-plugin-storybook' to use the Storybook config.",
        );
      }
    },
  },
  setups: {
    reactRecommended: [...base, ...prettier, ...react],
    reactRecommendedNoPrettier: [...base, ...react],
  },
} as {
  configs: Record<'base' | 'prettier' | 'react', Config[]> & {
    storybook: () => Config[];
  };
  setups: Record<'reactRecommended' | 'reactRecommendedNoPrettier', Config[]>;
};
