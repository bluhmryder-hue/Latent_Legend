## 2026-05-08 - [Keyboard Shortcut Conflict & Iframe Focus]
**Learning:** In applications where the main game logic resides within an `iframe`, keyboard event listeners must be attached to the `window` object *inside* the iframe to capture inputs correctly. Additionally, shortcuts should always include a check for focused input elements (`INPUT`, `TEXTAREA`, `isContentEditable`) to prevent accidental triggers during narrative entry.
**Action:** Always verify if the interactive layer is in an iframe and attach listeners accordingly. Use a standard guard clause for input focus in all global keyboard shortcut implementations.

## 2026-05-08 - [Blocker: Unterminated Multi-line Comments]
**Learning:** Pre-existing syntax errors like unterminated `/*` comments in configuration files (e.g., `vitest.config.ts`) can silently break the entire test runner or build process, leading to confusing environment errors like "missing node_modules" when the actual cause is a parse error.
**Action:** Perform a quick sanity check/lint on configuration files if the environment appears broken despite `pnpm install` succeeding.

## 2026-05-08 - [Explicit Form Labels and Next.js 14 ESLint 9 Integration]
**Learning:** Pairing every `<input>` and `<textarea>` with an explicit `<label for="...">` element dramatically improves screen reader navigability. In dual ESLint 9 and Next.js 14 workspaces, disabling built-in next linting during builds while running an independent ESLint 9 linter with `ESLINT_USE_FLAT_CONFIG=false eslint .` resolves build failures gracefully.
**Action:** Always audit form controls for explicit matching labels, and separate Next.js built-in linter from the workspaces global lint pipeline to prevent options mismatches.
