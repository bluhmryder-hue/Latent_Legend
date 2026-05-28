## 2026-05-08 - [Keyboard Shortcut Conflict & Iframe Focus]
**Learning:** In applications where the main game logic resides within an `iframe`, keyboard event listeners must be attached to the `window` object *inside* the iframe to capture inputs correctly. Additionally, shortcuts should always include a check for focused input elements (`INPUT`, `TEXTAREA`, `isContentEditable`) to prevent accidental triggers during narrative entry.
**Action:** Always verify if the iframe is present and attach listeners accordingly. Use a standard guard clause for input focus in all global keyboard shortcut implementations.

## 2026-05-08 - [Blocker: Unterminated Multi-line Comments]
**Learning:** Pre-existing syntax errors like unterminated `/*` comments in configuration files (e.g., `vitest.config.ts`) can silently break the entire test runner or build process, leading to confusing environment errors like "missing node_modules" when the actual cause is a parse error.
**Action:** Perform a quick sanity check/lint on configuration files if the environment appears broken despite `pnpm install` succeeding.

## 2026-05-28 - [Accessible Dynamic Grids & Keyboard Parity]
**Learning:** When building dynamic interactive grids (like the CensusView), ensure keyboard parity by refactoring logic into a shared handler (`_handleInteraction`) and adding a `keydown` listener (Enter/Space) to the delegator. Use `setAttribute('aria-label', ...)` for clean, non-HTML labels and include them in state-hashing logic to ensure attributes remain synchronized with the visual state.
**Action:** Always audit dynamic element creation for ARIA roles and ensure shared interaction handlers for click/keyboard events.
