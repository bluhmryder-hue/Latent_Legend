import js from "@eslint/js";
import nextPlugin from "@next/eslint-plugin-next";
import reactPlugin from "eslint-plugin-react";
import tsParser from "@typescript-eslint/parser";

export default [
  js.configs.recommended,
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.js"],
    languageOptions: {
      parser: tsParser,
    },
  },
  {
    plugins: {
      "@next/next": nextPlugin,
      react: reactPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
      "no-undef": "off",
      "no-unused-vars": "off",
      "no-dupe-keys": "off",
      "no-prototype-builtins": "off",
      "no-empty": "off",
      "no-const-assign": "off",
      "no-constant-binary-expression": "off",
      "no-redeclare": "off",
      "no-inner-declarations": "off",
      "no-self-assign": "off",
      "no-func-assign": "off",
      "no-case-declarations": "off",
    },
  },
  {
    ignores: [".next/*", "node_modules/*", "public/game.js"],
  },
];
