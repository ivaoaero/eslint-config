import eslint from '@eslint/js';
import prettier from 'eslint-plugin-prettier/recommended';
import tseslint from 'typescript-eslint';

export default [
  {
    ignores: [
      'node_modules/**/*',
      'dist/**/*',
      'build/**/*',
      'storybook-static/**/*',
    ],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    files: ['**/*.js'],
    ...tseslint.configs.disableTypeChecked,
  },
  prettier,
  {
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: [
            'eslint.config.js',
            'commitlint.config.ts',
            'release.config.js',
            'tsup.config.ts',
          ],
        },
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
];
