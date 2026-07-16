## 2026-05-08 - [Keyboard Shortcut Conflict & Iframe Focus]
**Learning:** In applications where the main game logic resides within an `iframe`, keyboard event listeners must be attached to the `window` object *inside* the iframe to capture inputs correctly. Additionally, shortcuts should always include a check for focused input elements (`INPUT`, `TEXTAREA`, `isContentEditable`) to prevent accidental triggers during narrative entry.
**Action:** Always verify if the interactive layer is in an iframe and attach listeners accordingly. Use a standard guard clause for input focus in all global keyboard shortcut implementations.

## 2026-05-08 - [Blocker: Unterminated Multi-line Comments]
**Learning:** Pre-existing syntax errors like unterminated `/*` comments in configuration files (e.g., `vitest.config.ts`) can silently break the entire test runner or build process, leading to confusing environment errors like "missing node_modules" when the actual cause is a parse error.
**Action:** Perform a quick sanity check/lint on configuration files if the environment appears broken despite `pnpm install` succeeding.

## 2026-07-16 - [Themed Toast vs Native Alert]
**Learning:** In 'sentient-quest', native browser 'alert()' calls are disruptive and break the dark glassmorphism immersion. Always use the built-in 'UI.showToast(message, type)' method for validation feedback to maintain aesthetic consistency and non-blocking user flow.
**Action:** Audit and replace native 'alert()' or 'confirm()' calls with 'UI.showToast()' or themed modals in the Animus engine.

## 2026-07-16 - [ESLint 9 Compatibility & Next.js]
**Learning:** In projects using ESLint 9 with legacy configurations, 'next lint' may fail because it passes incompatible CLI flags. Using 'ESLINT_USE_FLAT_CONFIG=false eslint .' in the 'lint' script ensures the CI can correctly validate the project without crashing on unrecognized options.
**Action:** When encountering 'Unknown options' in CI lint jobs for Next.js apps, consider bypassing 'next lint' for a direct eslint call with the legacy flag.
