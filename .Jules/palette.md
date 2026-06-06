## 2026-05-08 - [Keyboard Accessibility for Dynamic Grids]
**Learning:** For dynamic grids where items are frequently re-rendered (like `CensusView`), centralized event delegation on the parent container is the most robust way to handle both 'click' and 'keydown' (Enter/Space) interactions. Using a shared private method like `_handleInteraction` ensures identical logic for both input methods and prevents code duplication.
**Action:** Implement centralized `_handleInteraction` helpers when adding keyboard support to dynamically generated grid items.

## 2026-05-08 - [Clean ARIA Labels from Dynamic HTML]
**Learning:** When generating `aria-label` from strings that might contain HTML (e.g., status badges or icons), it's critical to strip tags and resolve common entities (like `&bull;` or `&nbsp;`) to ensure screen readers provide a clean, intelligible experience.
**Action:** Use a regex like `/<[^>]*>?/gm` and manual entity replacement for dynamic `aria-label` construction in template-based rendering.
