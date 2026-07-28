## 2026-05-08 - [Keyboard Shortcut Conflict & Iframe Focus]
**Learning:** In applications where the main game logic resides within an `iframe`, keyboard event listeners must be attached to the `window` object *inside* the iframe to capture inputs correctly. Additionally, shortcuts should always include a check for focused input elements (`INPUT`, `TEXTAREA`, `isContentEditable`) to prevent accidental triggers during narrative entry.
**Action:** Always verify if the interactive layer is in an iframe and attach listeners accordingly. Use a standard guard clause for input focus in all global keyboard shortcut implementations.

## 2026-05-08 - [Blocker: Unterminated Multi-line Comments]
**Learning:** Pre-existing syntax errors like unterminated `/*` comments in configuration files (e.g., `vitest.config.ts`) can silently break the entire test runner or build process, leading to confusing environment errors like "missing node_modules" when the actual cause is a parse error.
**Action:** Perform a quick sanity check/lint on configuration files if the environment appears broken despite `pnpm install` succeeding.

## 2026-05-12 - [Unclosed Header Comments & DOM/Import Blockers]
**Learning:** Unclosed HTML/CSS comments at the beginning of core files (such as `game.html` and `game.css`) are destructive. In CSS, it silences initial `@import` font declarations, ruining typography. In HTML, it causes standard parsers (like Python's HTMLParser or Playwright) to treat the entire file as a comment, returning empty DOM trees.
**Action:** Always verify header metadata comments are strictly closed with `-->` or `*/` when modifying files with header templates.
