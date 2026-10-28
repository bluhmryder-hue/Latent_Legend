import nextPlugin from "@next/eslint-plugin-next"

const eslintConfig = [
  nextPlugin.flatConfig.coreWebVitals,
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
      "public/**",
    ],
  },
  {
    rules: {
      "@next/next/no-html-link-for-pages": "off",
      "@next/next/no-img-element": "off",
    },
  },
]

export default eslintConfig
