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
      'prettier/prettier': 'error'
    }
  },
  {
    // Configuration for JavaScript files
    languageOptions: {
      globals: globals.browser // This ensures `document` and `window` are defined
    },
    files: ['**/*.js', '**/*.mjs'], // Specify the files to apply this config
    plugins: {},
    rules: {
      'no-undef': ['error'],
      'comma-dangle': [
        'error',
        {
          arrays: 'never',
          objects: 'never',
          imports: 'never',
          exports: 'never',
          functions: 'never'
        }
      ]
    }
  },
  pluginJs.configs.recommended
];
