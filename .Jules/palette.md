## 2026-05-08 - [Keyboard Shortcut Conflict & Iframe Focus]
**Learning:** In applications where the main game logic resides within an `iframe`, keyboard event listeners must be attached to the `window` object *inside* the iframe to capture inputs correctly. Additionally, shortcuts should always include a check for focused input elements (`INPUT`, `TEXTAREA`, `isContentEditable`) to prevent accidental triggers during narrative entry.
**Action:** Always verify if the interactive layer is in an iframe and attach listeners accordingly. Use a standard guard clause for input focus in all global keyboard shortcut implementations.

## 2026-05-08 - [Blocker: Unterminated Multi-line Comments]
**Learning:** Pre-existing syntax errors like unterminated `/*` comments in configuration files (e.g., `vitest.config.ts`) can silently break the entire test runner or build process, leading to confusing environment errors like "missing node_modules" when the actual cause is a parse error.
**Action:** Perform a quick sanity check/lint on configuration files if the environment appears broken despite `pnpm install` succeeding.

## 2026-08-14 - [Silenced CSS Imports & Parser Breaks from Unclosed Comments]
**Learning:** Unclosed comments on the first line of critical files (like an unclosed `<!--` in `game.html` or an unclosed `/*` in `game.css`) can lead to subtle but severe failures. In CSS, an unclosed comment silences `@import` statements for external fonts (causing fallback typography failures); in HTML, it treats the entire file as a comment for standard parsers (breaking DOM trees in tools like Playwright or Python parsers).
**Action:** Always ensure all metadata comment blocks are strictly closed (`-->` for HTML, `*/` for CSS) and verify loading of critical resources like external fonts.
