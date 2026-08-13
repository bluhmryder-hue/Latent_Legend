## 2026-05-08 - [Keyboard Shortcut Conflict & Iframe Focus]
**Learning:** In applications where the main game logic resides within an `iframe`, keyboard event listeners must be attached to the `window` object *inside* the iframe to capture inputs correctly. Additionally, shortcuts should always include a check for focused input elements (`INPUT`, `TEXTAREA`, `isContentEditable`) to prevent accidental triggers during narrative entry.
**Action:** Always verify if the interactive layer is in an iframe and attach listeners accordingly. Use a standard guard clause for input focus in all global keyboard shortcut implementations.

## 2026-05-08 - [Blocker: Unterminated Multi-line Comments]
**Learning:** Pre-existing syntax errors like unterminated `/*` comments in configuration files (e.g., `vitest.config.ts`) can silently break the entire test runner or build process, leading to confusing environment errors like "missing node_modules" when the actual cause is a parse error.
**Action:** Perform a quick sanity check/lint on configuration files if the environment appears broken despite `pnpm install` succeeding.

## 2026-05-12 - [Accessible Interactive Elements & Syntax Safeguards]
**Learning:** Icon-only buttons lacking explicit `aria-label` attributes are completely silent to screen readers, rendering critical application features (such as closing modals, toggling states, or purging storage) inaccessible. Additionally, subtle syntax mistakes like unclosed HTML/CSS comments on the first line of critical resource files can silently fail font imports or cause DOM parser timeouts in testing frameworks.
**Action:** Always audit interactive icon-only control structures for descriptive `aria-label` parameters and strictly close header comment blocks in CSS, HTML, and JS configurations.
