## 2026-05-08 - [Keyboard Shortcut Conflict & Iframe Focus]
**Learning:** In applications where the main game logic resides within an `iframe`, keyboard event listeners must be attached to the `window` object *inside* the iframe to capture inputs correctly. Additionally, shortcuts should always include a check for focused input elements (`INPUT`, `TEXTAREA`, `isContentEditable`) to prevent accidental triggers during narrative entry.
**Action:** Always verify if the interactive layer is in an iframe and attach listeners accordingly. Use a standard guard clause for input focus in all global keyboard shortcut implementations.

## 2026-05-08 - [Blocker: Unterminated Multi-line Comments]
**Learning:** Pre-existing syntax errors like unterminated `/*` comments in configuration files (e.g., `vitest.config.ts`) can silently break the entire test runner or build process, leading to confusing environment errors like "missing node_modules" when the actual cause is a parse error.
**Action:** Perform a quick sanity check/lint on configuration files if the environment appears broken despite `pnpm install` succeeding.

## 2026-06-09 - [Synchronized Interaction Logic for Accessibility]
**Learning:** For complex, dynamically rendered vanilla JS components (like the NPC Grid), extracting interaction logic into a centralized `_handleInteraction` method is critical for maintaining consistency between mouse clicks and keyboard events (`Enter`/`Space`). This prevents logic drift and ensures that accessibility improvements (like `role="button"` and `tabindex`) are backed by reliable, unified behavior.
**Action:** Always use a shared interaction handler when bridging Click and Keydown events in Census-style grid components.
