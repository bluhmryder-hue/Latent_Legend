/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // We run eslint independently in our workspace linting pipeline to avoid ESLint 9 compatibility issues with Next 14's built-in linter.
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
