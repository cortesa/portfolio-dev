// Flat ESLint config for Astro + TypeScript + React
import js from "@eslint/js"
import tseslint from "typescript-eslint"
import astro from "eslint-plugin-astro"
import astroParser from "astro-eslint-parser"
import react from "eslint-plugin-react"
import reactHooks from "eslint-plugin-react-hooks"
import importPlugin from "eslint-plugin-import"
import stylistic from "@stylistic/eslint-plugin"

export default [
  // A) Global ignores and base presets
  { ignores: ["dist/**", "node_modules/**", ".astro/**", "eslint.config.js"] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  // Astro recommended base
  ...astro.configs.recommended,

  // B) JS/TS base + stylistic rules (non-React)
  {
    files: ["**/*.{js,ts}"],
    languageOptions: {
      parser: tseslint.parser,
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: {
      import: importPlugin,
      "react-hooks": reactHooks,
      "@typescript-eslint": tseslint.plugin,
      "@stylistic": stylistic,
    },
    rules: {
      // Personal stylistic rules
      quotes: ["error", "double", { avoidEscape: true, allowTemplateLiterals: true }],
      "jsx-quotes": ["error", "prefer-double"],
      "eol-last": ["error", "always"],
      "no-multiple-empty-lines": ["error", { max: 1, maxBOF: 0, maxEOF: 1 }],
      "no-mixed-spaces-and-tabs": "error",
      "no-tabs": "error",
      indent: ["error", 2, { SwitchCase: 1 }],
      "object-curly-spacing": ["error", "always"],
      "array-bracket-spacing": ["error", "always"],
      "space-infix-ops": "error",
      "arrow-spacing": ["error", { before: true, after: true }],
      "padded-blocks": ["error", { blocks: "never", classes: "never", switches: "never" }],
      "padding-line-between-statements": [
        "error",
        { blankLine: "always", prev: "*", next: "return" },
      ],

      // Import ordering via eslint-plugin-import
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
            "object",
            "type",
          ],
          pathGroups: [
            {
              pattern: "@/**",
              group: "internal",
              position: "after",
            },
          ],
          pathGroupsExcludedImportTypes: ["builtin"],
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],
      // Stylistic (TypeScript)
      "@stylistic/type-annotation-spacing": [
        "error",
        { before: false, after: true },
      ],
    },
  },

  // B.2) React/React Hooks rules (only for JSX/TSX)
  {
    files: ["**/*.{jsx,tsx}"],
    languageOptions: {
      parser: tseslint.parser,
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      import: importPlugin,
      "@typescript-eslint": tseslint.plugin,
      "@stylistic": stylistic,
    },
    settings: { react: { version: "detect" } },
    rules: {
      // Keep base stylistic rules for consistency
      quotes: ["error", "double", { avoidEscape: true, allowTemplateLiterals: true }],
      "jsx-quotes": ["error", "prefer-double"],
      "eol-last": ["error", "always"],
      "no-multiple-empty-lines": ["error", { max: 1, maxBOF: 0, maxEOF: 1 }],
      "no-mixed-spaces-and-tabs": "error",
      "no-tabs": "error",
      indent: ["error", 2, { SwitchCase: 1 }],
      "object-curly-spacing": ["error", "always"],
      "array-bracket-spacing": ["error", "always"],
      "space-infix-ops": "error",
      "arrow-spacing": ["error", { before: true, after: true }],
      "padded-blocks": ["error", { blocks: "never", classes: "never", switches: "never" }],
      "padding-line-between-statements": [
        "error",
        { blankLine: "always", prev: "*", next: "return" },
      ],

      // Import order in React files too
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
            "object",
            "type",
          ],
          pathGroups: [
            {
              pattern: "@/**",
              group: "internal",
              position: "after",
            },
          ],
          pathGroupsExcludedImportTypes: ["builtin"],
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],

      // React-specific
      "react/jsx-indent": ["error", 2],
      "react/jsx-indent-props": ["error", 2],
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      // Stylistic (TypeScript)
      "@stylistic/type-annotation-spacing": [
        "error",
        { before: false, after: true },
      ],
    },
  },

  // C) Astro block overrides
  {
    files: ["**/*.astro"],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: tseslint.parser,
        ecmaVersion: "latest",
        sourceType: "module",
        extraFileExtensions: [".astro"],
      },
    },
    plugins: {
      "@stylistic": stylistic,
    },
    rules: {
      // Optional stylistic consistency for Astro files
      "astro/semi": ["error", "never"],
      // Enforce no empty lines at BOF and single at EOF
      "no-multiple-empty-lines": ["error", { max: 1, maxBOF: 0, maxEOF: 1 }],
      "eol-last": ["error", "always"],
      // Stylistic (TypeScript)
      "@stylistic/type-annotation-spacing": [
        "error",
        { before: false, after: true },
      ],
    },
  },
]
