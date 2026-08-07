## 2026-05-08 - [Keyboard Shortcut Conflict & Iframe Focus]
**Learning:** In applications where the main game logic resides within an `iframe`, keyboard event listeners must be attached to the `window` object *inside* the iframe to capture inputs correctly. Additionally, shortcuts should always include a check for focused input elements (`INPUT`, `TEXTAREA`, `isContentEditable`) to prevent accidental triggers during narrative entry.
**Action:** Always verify if the interactive layer is in an iframe and attach listeners accordingly. Use a standard guard clause for input focus in all global keyboard shortcut implementations.

## 2026-05-08 - [Blocker: Unterminated Multi-line Comments]
**Learning:** Pre-existing syntax errors like unterminated `/*` comments in configuration files (e.g., `vitest.config.ts`) can silently break the entire test runner or build process, leading to confusing environment errors like "missing node_modules" when the actual cause is a parse error.
**Action:** Perform a quick sanity check/lint on configuration files if the environment appears broken despite `pnpm install` succeeding.

## 2026-05-08 - [Form Accessibility and Font Loading in Monolithic Files]
**Learning:** Associating visible and visually-hidden (`.sr-only`) `<label>` tags with their respective input elements via the `for` attribute drastically improves screen reader usability without disrupting the aesthetic glassmorphism layout. Furthermore, unclosed header comments in CSS files can silently deactivate key features such as `@import` font-face declarations, causing fallback to generic default typography.
**Action:** Ensure all dynamic and static inputs are coupled with matching labels, and carefully sanitize header comments in stylesheet assets.
