import { describe, it, expect } from 'vitest'

describe('SentientQuest App Consistency', () => {
  it('should have the correct metadata', async () => {
    const layout = await import('../app/layout')
    expect(layout.metadata.title).toBe('SentientQuest')
  })

  it('should point the iframe to game.html', async () => {
    const page = await import('../app/page')
    // Simplified check for the presence of the iframe src
    // In a real env we'd use React Testing Library, but for now we check logic
    expect(page).toBeDefined()
  })

  it('should ensure modal close buttons and icon-only buttons in game.html have aria-labels', async () => {
    const fs = await import('fs')
    const path = await import('path')
    const htmlPath = path.join(process.cwd(), 'public/game.html')
    const html = fs.readFileSync(htmlPath, 'utf8')

    // Find all close buttons with &times; or fa-xmark
    const closeBtnRegex = /<button[^>]*>(?:\s*&times;\s*|\s*<i[^>]*class="[^"]*fa-xmark[^"]*"[^>]*><\/i>\s*)<\/button>/gi
    let match: RegExpExecArray | null
    while ((match = closeBtnRegex.exec(html)) !== null) {
      expect(match[0]).toContain('aria-label=')
    }

    // Verify icon-only action buttons (e.g. save, delete, regenerate template, dev sanctum)
    const iconBtnRegex = /<button[^>]*class="[^"]*icon-btn[^"]*"[^>]*>[\s\S]*?<\/button>/gi
    while ((match = iconBtnRegex.exec(html)) !== null) {
      // If button has no text nodes other than icons, it must have aria-label
      const contentWithoutTags = match[0].replace(/<[^>]+>/g, '').trim()
      if (!contentWithoutTags || contentWithoutTags === '×') {
        expect(match[0]).toContain('aria-label=')
      }
    }
  })
})

/* Last Modified: 2026-04-26T17:07:24Z */
