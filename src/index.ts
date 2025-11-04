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
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const storybook = require('./storybook.js') as Config[];
      return storybook;
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
