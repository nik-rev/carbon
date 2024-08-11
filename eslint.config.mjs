import { fixupPluginRules } from '@eslint/compat';

import js from '@eslint/js';
import typescript from 'typescript-eslint';
import prettierConfig from 'eslint-config-prettier';
import prettier from 'eslint-plugin-prettier';
import accessibility from 'eslint-plugin-jsx-a11y';
import functional from 'eslint-plugin-functional';
import react from 'eslint-plugin-react';
import hooks from 'eslint-plugin-react-hooks';
import unicorn from 'eslint-plugin-unicorn';
import regexp from 'eslint-plugin-regexp';
import security from 'eslint-plugin-security';
import sonar from 'eslint-plugin-sonarjs';
import promise from 'eslint-plugin-promise';
import comments from 'eslint-plugin-eslint-comments';
import importx from 'eslint-plugin-import-x';
import tailwindcss from 'eslint-plugin-tailwindcss';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import next from '@next/eslint-plugin-next';

const rulesMapper = (value, pluginsRules) => {
  return Object.fromEntries(
    Object.entries(pluginsRules).flatMap(([plugin, rules]) => {
      return rules.map(rule => [`${plugin}/${rule}`, value]);
    })
  );
};
const namingConvention = [
  'error',
  {
    selector: ['memberLike', 'property', 'parameter'],
    format: ['camelCase'],
  },
  {
    selector: ['typeLike'],
    format: ['PascalCase'],
  },
  {
    selector: ['function'],
    format: ['camelCase', 'PascalCase'],
  },
  {
    selector: 'variable',
    types: ['boolean'],
    format: ['camelCase'],
    prefix: ['is', 'should', 'has', 'can', 'did', 'will'],
  },
  {
    selector: [
      'classProperty',
      'objectLiteralProperty',
      'typeProperty',
      'method',
      'accessor',
      'enumMember',
    ],
    format: null,
    modifiers: ['requiresQuotes'],
  },
  {
    selector: 'variable',
    modifiers: ['destructured'],
    format: null,
  },
];

export default typescript.config(
  promise.configs['flat/recommended'],
  accessibility.flatConfigs.strict,
  sonar.configs.recommended,
  security.configs.recommended,
  unicorn.configs['flat/all'],
  regexp.configs['flat/all'],
  js.configs.all,
  react.configs.flat.all,
  ...typescript.configs.strictTypeChecked,
  ...typescript.configs.stylisticTypeChecked,
  functional.configs.noMutations,
  {
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      prettier,
      tailwindcss,
      'simple-import-sort': simpleImportSort,
      'import-x': importx,
      'react-hooks': fixupPluginRules(hooks),
      'eslint-comments': fixupPluginRules(comments),
      '@next/next': fixupPluginRules(next),
    },
    settings: {
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx'],
      },
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
          project: 'tsconfig.json',
        },
      },

      react: {
        version: 'detect',
      },
    },
    rules: {
      ...prettierConfig.rules,
      ...next.configs.recommended.rules,
      ...hooks.configs.recommended.rules,
      ...comments.configs.recommended.rules,
      ...importx.configs.recommended.rules,
      "@typescript-eslint/array-type": [
        "error",
        { default: "array-simple", readonly: "array-simple" },
      ],
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: ["memberLike", "property", "parameter"],
          format: ["camelCase"],
        },
      '@typescript-eslint/naming-convention': namingConvention,
        {
          selector: ["typeLike"],
          format: ["PascalCase"],
        },
        {
          selector: ["function"],
          format: ["camelCase", "PascalCase"],
        },
        {
          selector: "variable",
          types: ["boolean"],
          format: ["camelCase"],
          prefix: ["is", "should", "has", "can", "did", "will"],
        },
        {
          selector: [
            "classProperty",
            "objectLiteralProperty",
            "typeProperty",
            "method",
            "accessor",
            "enumMember",
          ],
          format: null,
          modifiers: ["requiresQuotes"],
        },
        {
          selector: "variable",
          modifiers: ["destructured"],
          format: null,
        },
      ],
      "@typescript-eslint/class-methods-use-this": "error",
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          fixStyle: "inline-type-imports",
          prefer: "type-imports",
        },
      ],
      "@typescript-eslint/consistent-type-exports": "error",
      "@typescript-eslint/default-param-last": "error",
      "@typescript-eslint/init-declarations": "error",
      "@typescript-eslint/no-loop-func": "error",
      "@typescript-eslint/max-params": "error",
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/no-explicit-any": ["error", { fixToUnknown: true }],
      "@typescript-eslint/no-shadow": "error",
      "@typescript-eslint/no-use-before-define": "error",
      "@typescript-eslint/no-useless-empty-export": "error",
      "@typescript-eslint/parameter-properties": "error",
      "@typescript-eslint/no-unnecessary-parameter-property-assignment":
        "error",
      "@typescript-eslint/prefer-destructuring": "error",
      "@typescript-eslint/promise-function-async": "error",
      "@typescript-eslint/no-unnecessary-qualifier": "error",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_$",
          varsIgnorePattern: "^_$",
          caughtErrorsIgnorePattern: "^_$",
        },
      ],
      "@typescript-eslint/restrict-template-expressions": [
        "error",
        {
          allowBoolean: true,
          allowNullish: true,
          allowNumber: true,
          allowRegExp: true,
        },
      ],
      "@typescript-eslint/switch-exhaustiveness-check": [
        "error",
        { requireDefaultForNonUnion: true },
      ],
      "capitalized-comments": "off",
      "class-methods-use-this": "off",
      "consistent-return": "off",
      "default-param-last": "off",
      "func-style": "off",
      "prefer-destructuring": "off",
      "no-use-before-define": "off",
      "id-length": "off",
      "init-declarations": "off",
      "max-lines-per-function": "off",
      "max-params": "off",
      "max-statements": "off",
      "multiline-comment-style": "off",
      "no-loop-func": "off",
      "new-cap": "off",
      "sort-imports": "off",
      "sort-keys": "off",
      "no-duplicate-imports": "off",
      "no-magic-numbers": "off",
      "no-shadow": "off",
      "no-ternary": "off",
      "no-underscore-dangle": "off",
      "no-unused-expressions": "off",
      "no-void": ["error", { allowAsStatement: true }],
      "one-var": ["error", "never"],
      "prettier/prettier": ["warn"],
      "react/forbid-component-props": "off",
      "react/jsx-filename-extension": [
        "error",
        { extensions: [".jsx", ".tsx"] },
      ],
      "react/jsx-max-depth": "off",
      "react/jsx-no-bind": ["error", { allowArrowFunctions: true }],
      "react/jsx-no-constructed-context-values": "off",
      "react/jsx-no-leaked-render": "off",
      "react/jsx-no-literals": "off",
      "react/jsx-props-no-spreading": "off",
      "react/jsx-sort-props": "off",
      "react/no-multi-comp": "off",
      "react/no-unescaped-entities": "off",
      "react/prop-types": ["error", { ignore: ["className"] }],
      "react/react-in-jsx-scope": "off",
      "react/require-default-props": "off",
      "promise/always-return": "off",
      "promise/catch-or-return": "off",
      "tailwindcss/enforces-negative-arbitrary-values": "error",
      "tailwindcss/enforces-shorthand": "error",
      "tailwindcss/no-contradicting-classname": "error",
      "tailwindcss/no-unnecessary-arbitrary-value": "error",
      "unicorn/no-array-reduce": "off",
      "unicorn/no-keyword-prefix": "off",
      "unicorn/no-null": "off",
      "unicorn/prefer-at": ["error", { checkAllIndexAccess: true }],
      "unicorn/prevent-abbreviations": "off",
      "simple-import-sort/exports": "error",
      "simple-import-sort/imports": "error",
    },
  },
  {
    ignores: ["eslint.config.mjs"],
  },
);
