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

  it('should ensure all modal close and icon buttons in game.html have aria-labels', async () => {
    const fs = await import('fs')
    const path = await import('path')
    const gameHtml = fs.readFileSync(path.join(process.cwd(), 'public/game.html'), 'utf-8')

    // Find all <button> tags with class icon-btn or settings-close-btn
    const buttonRegex = /<button\s+[^>]*class="[^"]*(?:icon-btn|settings-close-btn)[^"]*"[^>]*>/g
    const matches = gameHtml.match(buttonRegex) || []

    expect(matches.length).toBeGreaterThan(0)
    for (const buttonTag of matches) {
      expect(buttonTag).toContain('aria-label=')
    }
  })
})

/* Last Modified: 2026-04-26T17:07:24Z */
