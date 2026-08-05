## 2026-05-08 - [CSS Block Comments & Google Fonts Loading]
**Learning:** Unclosed block comments at the very beginning of CSS files can silently treat subsequent rules, specifically `@import` declarations for fonts, as part of the comment. This results in the silent failure of custom Google Fonts loaded via `@import` and degrades typography rendering back to standard system fallbacks without any browser console errors.
**Action:** Always strictly close all comment blocks `/* ... */` in stylesheet headers to prevent parser suppression of subsequent import rules.

## 2026-05-08 - [Keyboard Shortcut Conflict & Iframe Focus]
**Learning:** In applications where the main game logic resides within an `iframe`, keyboard event listeners must be attached to the `window` object *inside* the iframe to capture inputs correctly. Additionally, shortcuts should always include a check for focused input elements (`INPUT`, `TEXTAREA`, `isContentEditable`) to prevent accidental triggers during narrative entry.
**Action:** Always verify if the interactive layer is in an iframe and attach listeners accordingly. Use a standard guard clause for input focus in all global keyboard shortcut implementations.

## 2026-05-08 - [Blocker: Unterminated Multi-line Comments]
**Learning:** Pre-existing syntax errors like unterminated `/*` comments in configuration files (e.g., `vitest.config.ts`) can silently break the entire test runner or build process, leading to confusing environment errors like "missing node_modules" when the actual cause is a parse error.
**Action:** Perform a quick sanity check/lint on configuration files if the environment appears broken despite `pnpm install` succeeding.
