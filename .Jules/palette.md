## 2026-05-01 - [Pattern: Missing ARIA Labels on Icon-Only Buttons]
**Learning:** In highly stylized, "glassmorphism" based UIs like SentientQuest, developers often prioritize visual minimalism (using only FontAwesome icons) at the expense of accessibility. This leaves screen reader users without context for critical controls like settings, help, or close buttons.
**Action:** Always audit icon-only buttons for missing `aria-label` or `title` attributes. For dynamic elements injected via `innerHTML`, ensure the template literals include these accessibility markers.

## 2026-05-01 - [Accessibility for Live Content]
**Learning:** Applications with narrative logs or frequent toast notifications benefit significantly from ARIA live regions (`aria-live="polite"`). Without them, screen reader users may miss emergent world events or system feedback.
**Action:** Wrap narrative logs and toast containers in ARIA live regions during the initial layout definition.
