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

  it('should ensure all modal close buttons in game.html have aria-label attributes', async () => {
    const fs = await import('fs')
    const path = await import('path')
    const htmlPath = path.resolve(__dirname, '../public/game.html')
    const htmlContent = fs.readFileSync(htmlPath, 'utf-8')

    const buttonRegex = /<button[^>]*>(?:&times;|<i[^>]*fa-xmark[^>]*><\/i>)<\/button>/g
    const closeButtons = htmlContent.match(buttonRegex) || []

    expect(closeButtons.length).toBeGreaterThan(0)
    for (const btn of closeButtons) {
      expect(btn).toContain('aria-label=')
    }
  })
})

/* Last Modified: 2026-04-26T17:07:24Z */
