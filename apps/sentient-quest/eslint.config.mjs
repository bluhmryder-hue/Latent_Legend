import tseslint from "typescript-eslint"

export default tseslint.config(
  ...tseslint.configs.recommended,
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "public/game.js",
    ],
  },
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
)
