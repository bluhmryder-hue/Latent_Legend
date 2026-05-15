## 2026-05-08 - [Keyboard Shortcut Conflict & Iframe Focus]
**Learning:** In applications where the main game logic resides within an `iframe`, keyboard event listeners must be attached to the `window` object *inside* the iframe to capture inputs correctly. Additionally, shortcuts should always include a check for focused input elements (`INPUT`, `TEXTAREA`, `isContentEditable`) to prevent accidental triggers during narrative entry.
**Action:** Always verify if the interactive layer is in an iframe and attach listeners accordingly. Use a standard guard clause for input focus in all global keyboard shortcut implementations.

## 2026-05-08 - [Blocker: Unterminated Multi-line Comments]
**Learning:** Pre-existing syntax errors like unterminated `/*` comments in configuration files (e.g., `vitest.config.ts`) can silently break the entire test runner or build process, leading to confusing environment errors like "missing node_modules" when the actual cause is a parse error.
**Action:** Perform a quick sanity check/lint on configuration files if the environment appears broken despite `pnpm install` succeeding.

## 2026-05-09 - [Thematic Feedback vs. Native Overlays]
**Learning:** In immersive simulations like SentientQuest, native browser `alert()` calls break the suspension of disbelief and block the main thread. Using the internal `UI.showToast(msg, type)` provides non-disruptive feedback that respects the application's aesthetic and allows the state to continue updating in the background.
**Action:** Always replace native `alert()` or `confirm()` calls with the app-specific toast or modal system for consistent UX.

## 2026-05-09 - [Keyboard Interactivity in Dynamic Grids]
**Learning:** Dynamically generated grid items (like NPC cards) require explicit ARIA roles and tabindex to be discoverable by screen readers and keyboard users. Delegating the `keydown` event to the parent container is more performant than attaching individual listeners to hundreds of elements and ensures new items are automatically interactive.
**Action:** For all dynamic list/grid components, implement container-level event delegation for `keydown` (Enter/Space) and ensure the element creation logic includes `role="button"` and `tabindex="0"`.
