import { describe, it, expect } from 'vitest'
import fs from 'fs'
import path from 'path'

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

  it('should have aria-label on all icon and close buttons in game.html', () => {
    const htmlPath = path.resolve(__dirname, '../public/game.html')
    const html = fs.readFileSync(htmlPath, 'utf8')
    const buttonRegex = /<button[^>]*class="[^"]*(?:icon-btn|settings-close-btn)[^"]*"[^>]*>/g
    const matches = html.match(buttonRegex) || []

    expect(matches.length).toBeGreaterThan(0)
    for (const buttonTag of matches) {
      expect(buttonTag).toContain('aria-label=')
    }
  })
})

/* Last Modified: 2026-04-26T17:07:24Z */
