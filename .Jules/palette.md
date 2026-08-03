## 2026-05-08 - [Keyboard Shortcut Conflict & Iframe Focus]
**Learning:** In applications where the main game logic resides within an `iframe`, keyboard event listeners must be attached to the `window` object *inside* the iframe to capture inputs correctly. Additionally, shortcuts should always include a check for focused input elements (`INPUT`, `TEXTAREA`, `isContentEditable`) to prevent accidental triggers during narrative entry.
**Action:** Always verify if the interactive layer is in an iframe and attach listeners accordingly. Use a standard guard clause for input focus in all global keyboard shortcut implementations.

## 2026-05-08 - [Blocker: Unterminated Multi-line Comments]
**Learning:** Pre-existing syntax errors like unterminated `/*` comments in configuration files (e.g., `vitest.config.ts`) can silently break the entire test runner or build process, leading to confusing environment errors like "missing node_modules" when the actual cause is a parse error.
**Action:** Perform a quick sanity check/lint on configuration files if the environment appears broken despite `pnpm install` succeeding.

## 2026-05-08 - [Accessible Interactive Elements in Dynamically Manifested Views]
**Learning:** For dynamic or static list components with favorite toggles, utilizing a clickable generic `span` without keyboard focusability is highly inaccessible. Converting these into semantic `<button>` elements with dynamic, localized `aria-label`s and style-reset class names provides full keyboard/screen reader accessibility. Additionally, unclosed HTML comments on the first line of main HTML wrapper files cause headless browsers (like Playwright/Chromium) to treat the entire DOM as a comment, silently failing selectors.
**Action:** Always audit list views for focusable controls and ensure all first-line file metadata headers are correctly closed and syntax-valid.
