import globals from 'globals';
import pluginJs from '@eslint/js';
import html from '@html-eslint/eslint-plugin';
import prettier from 'eslint-plugin-prettier';

export default [
  {
    languageOptions: { globals: globals.browser },
    // recommended configuration included in the plugin
    ...html.configs['flat/recommended'],
    files: ['**/*.html'],
    plugins: {
      prettier
    },
    rules: {
      'prettier/prettier': 'error',
      semi: ['warn', 'always']
    }
  },
  pluginJs.configs.recommended
];
