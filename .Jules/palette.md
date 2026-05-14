## 2026-05-08 - [Keyboard Shortcut Conflict & Iframe Focus]
**Learning:** In applications where the main game logic resides within an `iframe`, keyboard event listeners must be attached to the `window` object *inside* the iframe to capture inputs correctly. Additionally, shortcuts should always include a check for focused input elements (`INPUT`, `TEXTAREA`, `isContentEditable`) to prevent accidental triggers during narrative entry.
**Action:** Always verify if the interactive layer is in an iframe and attach listeners accordingly. Use a standard guard clause for input focus in all global keyboard shortcut implementations.

## 2026-05-08 - [Blocker: Unterminated Multi-line Comments]
**Learning:** Pre-existing syntax errors like unterminated `/*` comments in configuration files (e.g., `vitest.config.ts`) can silently break the entire test runner or build process, leading to confusing environment errors like "missing node_modules" when the actual cause is a parse error.
**Action:** Perform a quick sanity check/lint on configuration files if the environment appears broken despite `pnpm install` succeeding.

## 2026-05-14 - [Keyboard Accessibility for Dynamic Grid Elements]
**Learning:** For dynamic grids where elements are frequently recreated or updated (e.g., the Census in 'sentient-quest'), using event delegation for both 'click' and 'keydown' (Enter/Space) with a shared interaction handler ensures consistent behavior and better performance than attaching individual listeners. Elements must also be explicitly assigned 'tabindex="0"' and 'role="button"' during their creation phase to be correctly recognized by assistive technologies.
**Action:** When making grid items interactive, implement a centralized `handleInteraction(evt, target)` helper and use event delegation on the container.
