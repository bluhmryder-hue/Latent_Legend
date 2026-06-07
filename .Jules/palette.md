## 2026-05-08 - [Keyboard Shortcut Conflict & Iframe Focus]
**Learning:** In applications where the main game logic resides within an `iframe`, keyboard event listeners must be attached to the `window` object *inside* the iframe to capture inputs correctly. Additionally, shortcuts should always include a check for focused input elements (`INPUT`, `TEXTAREA`, `isContentEditable`) to prevent accidental triggers during narrative entry.
**Action:** Always verify if the interactive layer is in an iframe and attach listeners accordingly. Use a standard guard clause for input focus in all global keyboard shortcut implementations.

## 2026-05-08 - [Blocker: Unterminated Multi-line Comments]
**Learning:** Pre-existing syntax errors like unterminated `/*` comments in configuration files (e.g., `vitest.config.ts`) can silently break the entire test runner or build process, leading to confusing environment errors like "missing node_modules" when the actual cause is a parse error.
**Action:** Perform a quick sanity check/lint on configuration files if the environment appears broken despite `pnpm install` succeeding.

## 2026-06-07 - [Accessible Dynamic Grids & State Sync]
**Learning:** For state-driven interactive grids (e.g., NPC cards), implementing keyboard accessibility (Enter/Space) and ARIA labels is insufficient if those attributes aren't synced with the rendering engine's diffing logic. In `sentient-quest`, the `stateHash` must include `aria-label` content to ensure screen readers receive updated status information when an entity's state changes without a full DOM rebuild. Centralizing logic in a `_handleInteraction` helper ensures identical behavior across input methods.
**Action:** Always include dynamic ARIA attributes in the component's state-tracking hash and unify click/keyboard logic in a shared handler.

## 2026-06-07 - [ESLint 9 Compatibility in Monorepos]
**Learning:** In monorepos where the root uses ESLint 9 but individual apps use older Next.js versions (like Next 14), `next lint` can fail with "Unknown options" because it picks up the ESLint 9 binary but doesn't support its new flat config by default. Explicitly pinning `eslint` to `8.57.0` in the local `package.json` forces the app to use a compatible version, resolving the CLI error.
**Action:** In Next.js 14 apps within an ESLint 9 monorepo, always pin local ESLint to version 8 to maintain linting compatibility.
