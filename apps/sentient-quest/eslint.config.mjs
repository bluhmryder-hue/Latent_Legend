import tseslint from "typescript-eslint"

export default tseslint.config(
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "public/game.js",
      "next-env.d.ts"
    ]
  },
  {
    rules: {
      "no-console": "off"
    }
  }
)
