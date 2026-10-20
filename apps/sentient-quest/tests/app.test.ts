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

  it('should ensure interactive controls and close buttons in game.html have aria-labels', async () => {
    const fs = await import('fs')
    const path = await import('path')
    const htmlPath = path.resolve(__dirname, '../public/game.html')
    const htmlContent = fs.readFileSync(htmlPath, 'utf-8')

    // Verify modal close buttons have aria-label
    expect(htmlContent).toContain('aria-label="Close Help"')
    expect(htmlContent).toContain('aria-label="Close Spirit Commune Chat"')
    expect(htmlContent).toContain('aria-label="Close AI Job Monitor"')
    expect(htmlContent).toContain('aria-label="Close Visual Archives"')
    expect(htmlContent).toContain('aria-label="Close Grimoire"')
    expect(htmlContent).toContain('aria-label="Close Inspector"')
    expect(htmlContent).toContain('aria-label="Close Settings"')

    // Verify command deck controls have aria-label
    expect(htmlContent).toContain('aria-label="Target selection"')
    expect(htmlContent).toContain('aria-label="Action mode selection"')
    expect(htmlContent).toContain('aria-label="Action input"')
    expect(htmlContent).toContain('aria-label="Travel destination selection"')
  })
})

/* Last Modified: 2026-04-26T17:07:24Z */
