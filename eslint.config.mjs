// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import tsParser from '@typescript-eslint/parser'
import vueParser from 'vue-eslint-parser'

export default withNuxt(
  // Base rules for all files
  {
    rules: {
      quotes: ["error", "double"],
      semi: ["error", "always"],
      "no-unused-vars": ["warn"],
      indent: ["error", 2],
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "space-before-function-paren": ["error", "always"],
      "object-curly-spacing": ["error", "always"],
      "no-trailing-spaces": "error"
    }
  },
  // TypeScript-specific rules
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tsParser,
    },
    rules: {
      "@typescript-eslint/no-unused-vars": ["warn"],
      "@typescript-eslint/explicit-function-return-type": ["off"],
      "@typescript-eslint/no-explicit-any": ["warn"],
      "@typescript-eslint/ban-ts-comment": ["warn"],
      "@typescript-eslint/no-inferrable-types": ["off"]
    }
  },
  // Vue-specific rules
  {
    files: ["**/*.vue"],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        extraFileExtensions: [".vue"]
      }
    },
    rules: {
      "vue/html-indent": ["error", 2],
      "vue/max-attributes-per-line": ["error", { singleline: 3 }],
      "vue/singleline-html-element-content-newline": "off",
      "vue/multiline-html-element-content-newline": "off",
      "vue/html-self-closing": ["error", {
        html: {
          void: "never",
          normal: "always",
          component: "always"
        }
      }]
    }
  }
)
