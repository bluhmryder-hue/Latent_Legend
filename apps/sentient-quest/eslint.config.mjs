import { FlatCompat } from "@eslint/eslintrc"

const compat = new FlatCompat()

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  {
    ignores: ["node_modules/**", ".next/**", "public/**"],
  },
  {
    rules: {
      "@next/next/no-html-link-for-pages": "off",
    },
  },
]

export default eslintConfig
