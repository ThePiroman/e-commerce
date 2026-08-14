import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';

export default [
  { 
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,vue}'], 
    languageOptions: { globals: globals.browser } 
  },
  
  ...tseslint.configs.recommended,
  
  ...pluginVue.configs['flat/essential'],
  
  { 
    files: ['**/*.vue'], 
    languageOptions: { 
      parserOptions: { 
        parser: tseslint.parser 
      } 
    } 
  },
  
  {
    rules: {
      'vue/multi-word-component-names': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'semi': ['error', 'always'],
      'quotes': ['error', 'single']
    }
  }
];