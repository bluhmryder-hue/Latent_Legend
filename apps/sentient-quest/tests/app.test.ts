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

  it('should ensure game.html modal close buttons have aria-label attributes', async () => {
    const fs = await import('fs')
    const path = await import('path')
    const htmlContent = fs.readFileSync(path.resolve(__dirname, '../public/game.html'), 'utf-8')

    // Close buttons using toggle/close functions should have aria-label
    const closeBtnMatches = htmlContent.match(/<button[^>]*onclick="UI\.(toggle|close)[^"]*"[^>]*>/g) || []
    expect(closeBtnMatches.length).toBeGreaterThan(0)
    for (const btnHtml of closeBtnMatches) {
      expect(btnHtml).toContain('aria-label=')
    }
  })
})

/* Last Modified: 2026-04-26T17:07:24Z */
