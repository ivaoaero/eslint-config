# IVAO ESLint config

This package is a shared configuration file for ESLint.
To use this config, follow the installation instructions.

## Installation

Install the following packages:

- `eslint`
- `@ivaoaero/eslint-config`

`yarn add -D eslint @ivaoaero/eslint-config` or `pnpm add -D eslint @ivaoaero/eslint-config`

### `eslint.config.(m)js`

You must add a `eslint.config.(m)js` file to your project to use this config package:

```js
import ivaoConfig from '@ivaoaero/eslint-config';

export default [
  ...ivaoConfig.configs.base,
  ...ivaoConfig.configs.prettier,
  {
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ['eslint.config.(m)js'],
        },
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
];
```

## Usage

The package provides 5 configuration presets and 2 setups.

### `configs`

#### `base`

The base configuration for all projects.

#### `prettier`

Enables the prettier plugin.

#### `react`

Enables many React ESLint plugins. Checkout `src/react.ts` for more information. _Tip: you can always disable some specific rules in your [`eslint.config.(m)js`](#eslintconfigmjs) file by appending a new block to the export array in which you can overwrite any settings._

#### `storybook`

Enables rules and plugins for storybook development.

#### `tailwind`

Enables ESLint rules for TailwindCSS.

### `setups`

#### `reactRecommended`

The setup enables the configs `base`, `prettier`, `react`, `tailwind`.

#### `reactRecommendedNoPrettier`

The setup enables the configs `base`, `react`, `tailwind`.
