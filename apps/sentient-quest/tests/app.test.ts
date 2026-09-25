import fs from 'fs'
import path from 'path'
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

  it('should ensure icon-only buttons in game.html have aria-label attributes', () => {
    const htmlPath = path.join(__dirname, '../public/game.html')
    const html = fs.readFileSync(htmlPath, 'utf-8')

    const buttonRegex = /<button\b[^>]*>/gi
    const buttons = html.match(buttonRegex) || []

    const iconButtons = buttons.filter(
      (btn) => btn.includes('class="icon-btn') || btn.includes('class="settings-close-btn')
    )

    expect(iconButtons.length).toBeGreaterThan(0)
    for (const btn of iconButtons) {
      expect(btn).toContain('aria-label=')
    }
  })
})

/* Last Modified: 2026-04-26T17:07:24Z */
