import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

const commonConfig = {
  languageOptions: {
    globals: { ...globals.browser, ...globals.node, ...globals.es2022 },
  },
};

const jsConfig = {
  files: ['**/*.js'],
  languageOptions: {
    sourceType: 'commonjs',
  },
};

const tsconfig = {
  files: ['**/*.ts'],
  languageOptions: {
    sourceType: 'commonjs',
  },
};

export default [
  commonConfig,
  jsConfig,
  tsconfig,
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
