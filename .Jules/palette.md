## 2026-05-08 - [Keyboard Shortcut Conflict & Iframe Focus]
**Learning:** In applications where the main game logic resides within an `iframe`, keyboard event listeners must be attached to the `window` object *inside* the iframe to capture inputs correctly. Additionally, shortcuts should always include a check for focused input elements (`INPUT`, `TEXTAREA`, `isContentEditable`) to prevent accidental triggers during narrative entry.
**Action:** Always verify if the interactive layer is in an iframe and attach listeners accordingly. Use a standard guard clause for input focus in all global keyboard shortcut implementations.

## 2026-05-08 - [Blocker: Unterminated Multi-line Comments]
**Learning:** Pre-existing syntax errors like unterminated `/*` comments in configuration files (e.g., `vitest.config.ts`) can silently break the entire test runner or build process, leading to confusing environment errors like "missing node_modules" when the actual cause is a parse error.
**Action:** Perform a quick sanity check/lint on configuration files if the environment appears broken despite `pnpm install` succeeding.

## 2026-05-08 - [Dynamic Accessibility in Diffing Engines]
**Learning:** In UI systems that use state-hashing to optimize DOM updates (like `sentient-quest`'s `CensusView`), all dynamic accessibility attributes (e.g., `aria-label` reflecting status badges) MUST be included in the state hash. Otherwise, a status change might not trigger a DOM update for the accessibility layer, leaving screen reader users with stale information.
**Action:** Always audit component `stateHash` or `shouldComponentUpdate` logic to ensure accessibility-critical strings are tracked.
