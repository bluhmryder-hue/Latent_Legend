## 2026-05-08 - [Keyboard Shortcut Conflict & Iframe Focus]
**Learning:** In applications where the main game logic resides within an `iframe`, keyboard event listeners must be attached to the `window` object *inside* the iframe to capture inputs correctly. Additionally, shortcuts should always include a check for focused input elements (`INPUT`, `TEXTAREA`, `isContentEditable`) to prevent accidental triggers during narrative entry.
**Action:** Always verify if the interactive layer is in an iframe and attach listeners accordingly. Use a standard guard clause for input focus in all global keyboard shortcut implementations.

## 2026-05-08 - [Blocker: Unterminated Multi-line Comments]
**Learning:** Pre-existing syntax errors like unterminated `/*` comments in configuration files (e.g., `vitest.config.ts`) can silently break the entire test runner or build process, leading to confusing environment errors like "missing node_modules" when the actual cause is a parse error.
**Action:** Perform a quick sanity check/lint on configuration files if the environment appears broken despite `pnpm install` succeeding.

## 2026-05-08 - [Keyboard Parity for Dynamic Components]
**Learning:** For dynamically rendered vanilla JS components like the NPC Grid in 'sentient-quest', extracting interaction logic into a centralized `_handleInteraction` method is a critical reusable pattern to ensure consistency between mouse clicks and keyboard events ('Enter'/'Space'). This avoids logic duplication and ensures that accessibility attributes (role="button", tabindex="0") lead to the exact same behavior as a click.
**Action:** When making any dynamic element interactive, immediately create a shared handler for both pointer and keyboard events. Use event delegation on the parent container to manage these handlers efficiently.
