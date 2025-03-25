import { type Config } from 'typescript-eslint';

import base from './base';
import prettier from './prettier';
import react from './react';
import storybook from './storybook';

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
} as {
  configs: Record<'base' | 'prettier' | 'react' | 'storybook', Config[]>;
  setups: Record<'reactRecommended' | 'reactRecommendedNoPrettier', Config[]>;
};
