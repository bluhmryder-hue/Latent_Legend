## 2026-05-08 - [Keyboard Shortcut Conflict & Iframe Focus]
**Learning:** In applications where the main game logic resides within an `iframe`, keyboard event listeners must be attached to the `window` object *inside* the iframe to capture inputs correctly. Additionally, shortcuts should always include a check for focused input elements (`INPUT`, `TEXTAREA`, `isContentEditable`) to prevent accidental triggers during narrative entry.
**Action:** Always verify if the interactive layer is in an iframe and attach listeners accordingly. Use a standard guard clause for input focus in all global keyboard shortcut implementations.

## 2026-05-08 - [Blocker: Unterminated Multi-line Comments]
**Learning:** Pre-existing syntax errors like unterminated `/*` comments in configuration files (e.g., `vitest.config.ts`) can silently break the entire test runner or build process, leading to confusing environment errors like "missing node_modules" when the actual cause is a parse error.
**Action:** Perform a quick sanity check/lint on configuration files if the environment appears broken despite `pnpm install` succeeding.

## 2026-05-18 - [Accessible Dynamic Lists via Event Delegation]
**Learning:** For high-frequency dynamic UI elements (like the NPC Census), attaching individual listeners is inefficient. Implementing a shared `handleInteraction(card, target)` helper and using event delegation for both `click` and `keydown` (Enter/Space) on the parent container provides a robust, accessible, and performant pattern.
**Action:** Use this pattern for all future dynamic lists in SentientQuest to ensure `aria-label`, `role="button"`, and focus states are maintained during state-hash-based DOM updates.
