## 2026-05-08 - [Keyboard Shortcut Conflict & Iframe Focus]
**Learning:** In applications where the main game logic resides within an `iframe`, keyboard event listeners must be attached to the `window` object *inside* the iframe to capture inputs correctly. Additionally, shortcuts should always include a check for focused input elements (`INPUT`, `TEXTAREA`, `isContentEditable`) to prevent accidental triggers during narrative entry.
**Action:** Always verify if the interactive layer is in an iframe and attach listeners accordingly. Use a standard guard clause for input focus in all global keyboard shortcut implementations.

## 2026-05-08 - [Blocker: Unterminated Multi-line Comments]
**Learning:** Pre-existing syntax errors like unterminated `/*` comments in configuration files (e.g., `vitest.config.ts`) can silently break the entire test runner or build process, leading to confusing environment errors like "missing node_modules" when the actual cause is a parse error.
**Action:** Perform a quick sanity check/lint on configuration files if the environment appears broken despite `pnpm install` succeeding.

## 2026-05-09 - [Malformed Comments Silencing Styles and Document Rendering]
**Learning:** In highly customized, monolithic vanilla layouts, simple syntax mistakes like unclosed HTML or CSS comment tags at the very beginning of files (e.g. `<!--` without `-->` in HTML, or `/*` without `*/` in CSS) can silently corrupt DOM parsing or deactivate key rendering directives like `@import` font tags. This makes standard accessibility audits and headless verifications fail in confusing ways.
**Action:** Always inspect files for unclosed comments first during styling or markup accessibility reviews to prevent silent silencing of fonts or DOM structure.
