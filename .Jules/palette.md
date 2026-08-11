## 2026-05-08 - [Keyboard Shortcut Conflict & Iframe Focus]
**Learning:** In applications where the main game logic resides within an `iframe`, keyboard event listeners must be attached to the `window` object *inside* the iframe to capture inputs correctly. Additionally, shortcuts should always include a check for focused input elements (`INPUT`, `TEXTAREA`, `isContentEditable`) to prevent accidental triggers during narrative entry.
**Action:** Always verify if the interactive layer is in an iframe and attach listeners accordingly. Use a standard guard clause for input focus in all global keyboard shortcut implementations.

## 2026-05-08 - [Blocker: Unterminated Multi-line Comments]
**Learning:** Pre-existing syntax errors like unterminated `/*` comments in configuration files (e.g., `vitest.config.ts`) can silently break the entire test runner or build process, leading to confusing environment errors like "missing node_modules" when the actual cause is a parse error.
**Action:** Perform a quick sanity check/lint on configuration files if the environment appears broken despite `pnpm install` succeeding.

## 2026-08-11 - [Accessibility: Unclosed Asset Header Comments & Screen Reader Labels]
**Learning:** Unclosed multiline comments at the start of source files (like CSS, HTML) can cause silent failures (e.g., silencing font `@import` rules in CSS or swallowing DOM nodes in standard HTML parsers/Playwright). Additionally, a comprehensive audit of interactive form elements (inputs, textareas, selects) using standard `<label>` components with matching `id`/`for` attributes (or `.sr-only` classes) dramatically increases screen-reader accessibility and interactive usability.
**Action:** Always verify all start comments are strictly closed with their corresponding tag (`-->` or `*/`), and structure form fields with explicit, semantic `<label>` associations to guarantee full screen-reader support.
