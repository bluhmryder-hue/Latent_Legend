## 2026-05-08 - [Keyboard Shortcut Conflict & Iframe Focus]
**Learning:** In applications where the main game logic resides within an `iframe`, keyboard event listeners must be attached to the `window` object *inside* the iframe to capture inputs correctly. Additionally, shortcuts should always include a check for focused input elements (`INPUT`, `TEXTAREA`, `isContentEditable`) to prevent accidental triggers during narrative entry.
**Action:** Always verify if the interactive layer is in an iframe and attach listeners accordingly. Use a standard guard clause for input focus in all global keyboard shortcut implementations.

## 2026-05-08 - [Blocker: Unterminated Multi-line Comments]
**Learning:** Pre-existing syntax errors like unterminated `/*` comments in configuration files (e.g., `vitest.config.ts`) can silently break the entire test runner or build process, leading to confusing environment errors like "missing node_modules" when the actual cause is a parse error.
**Action:** Perform a quick sanity check/lint on configuration files if the environment appears broken despite `pnpm install` succeeding.

## 2026-06-29 - [Centralized Interaction for Keyboard Parity]
**Learning:** For dynamically rendered cards (like NPCs in 'sentient-quest'), extracting interaction logic into a shared `_handleInteraction` method is critical for maintaining parity between click and keyboard (Enter/Space) events. Using event delegation on the parent container with a `tabindex="0"` and `role="button"` on children ensures the UI is both performant and accessible.
**Action:** Always implement a single interaction handler and bind it to both 'click' and 'keydown' (Enter/Space) events via delegation.
