import { UserConfig } from '@commitlint/types';

export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'footer-max-line-length': [1, 'always', 100],
  },
} satisfies UserConfig;
