## 2026-05-08 - [Keyboard Shortcut Conflict & Iframe Focus]
**Learning:** In applications where the main game logic resides within an `iframe`, keyboard event listeners must be attached to the `window` object *inside* the iframe to capture inputs correctly. Additionally, shortcuts should always include a check for focused input elements (`INPUT`, `TEXTAREA`, `isContentEditable`) to prevent accidental triggers during narrative entry.
**Action:** Always verify if the interactive layer is in an iframe and attach listeners accordingly. Use a standard guard clause for input focus in all global keyboard shortcut implementations.

## 2026-05-08 - [Blocker: Unterminated Multi-line Comments]
**Learning:** Pre-existing syntax errors like unterminated `/*` comments in configuration files (e.g., `vitest.config.ts`) can silently break the entire test runner or build process, leading to confusing environment errors like "missing node_modules" when the actual cause is a parse error.
**Action:** Perform a quick sanity check/lint on configuration files if the environment appears broken despite `pnpm install` succeeding.

## 2026-06-23 - [ESLint 9 Compatibility & Legacy Config]
**Learning:** In monorepos using ESLint 9, Next.js 14's default `next lint` command may fail due to unrecognized legacy options (e.g., `useEslintrc`). Forcing the legacy config engine via `ESLINT_USE_FLAT_CONFIG=false` and calling `eslint` directly is a necessary bridge until full Flat Config migration.
**Action:** If `next lint` fails in CI with "Unknown options", switch to explicit `eslint` calls with the flat config override.
