import { createRequire } from 'module'
import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import { defineConfig } from 'eslint/config'
import vueParser from 'vue-eslint-parser'

const require = createRequire(import.meta.url)
const autoImportGlobals = require('./.eslintrc-auto-import.json')

export default defineConfig([
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/build/**',
      '**/.git/**',
      '**/.gitignore',
      '**/package-lock.json',
      '**/yarn.lock',
      '**/pnpm-lock.yaml',
      '**/.env*',
      '**/.DS_Store',
      '**/*.timestamp-*.mjs',
      'apps/template-editor/**'
    ]
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,vue}', 'apps/**/*.{js,mjs,cjs,ts,mts,cts,vue}'],
    plugins: { js },
    extends: ['js/recommended']
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,vue}', 'apps/**/*.{js,mjs,cjs,ts,mts,cts,vue}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...autoImportGlobals.globals
      }
    }
  },
  {
    files: ['scripts/**/*.{js,mjs,cjs,ts}'],
    languageOptions: {
      globals: {
        ...globals.node
      }
    }
  },
  tseslint.configs.recommended,
  pluginVue.configs['flat/essential'],
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tseslint.parser,
        ecmaVersion: 'latest',
        sourceType: 'module'
      }
    }
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,vue}', 'apps/**/*.{js,mjs,cjs,ts,mts,cts,vue}'],
    rules: {
      'no-unused-vars': 'off', // Отключаем базовое правило для JS
      'no-constant-binary-expression': 'off',
      '@typescript-eslint/no-unused-expressions': 'off',
      'no-undef': 'error',
      '@typescript-eslint/no-explicit-any': 'off',
      // Настраиваем правило для TypeScript с игнорированием параметров, начинающихся с _
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_', // Игнорируем параметры, начинающиеся с _
          varsIgnorePattern: '^_', // Игнорируем переменные, начинающиеся с _
          caughtErrorsIgnorePattern: '^_' // Игнорируем ошибки в catch, начинающиеся с _
        }
      ]
    }
  },
  {
    files: ['**/*.vue'],
    rules: {
      'vue/multi-word-component-names': 'off'
    }
  }
])
