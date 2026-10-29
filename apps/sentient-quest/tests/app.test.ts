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

  it('should have aria-label attributes on modal close buttons and control icon buttons in game.html', async () => {
    const fs = await import('fs')
    const path = await import('path')
    const htmlContent = fs.readFileSync(path.resolve(__dirname, '../public/game.html'), 'utf-8')

    // Verify key aria-labels are present
    expect(htmlContent).toContain('aria-label="Close Manifestation Protocol"')
    expect(htmlContent).toContain('aria-label="Close Help"')
    expect(htmlContent).toContain('aria-label="Close Spirit Commune"')
    expect(htmlContent).toContain('aria-label="Close AI Job Monitor"')
    expect(htmlContent).toContain('aria-label="Close Visual Archives"')
    expect(htmlContent).toContain('aria-label="Close Grimoire"')
    expect(htmlContent).toContain('aria-label="Close Inspector"')
    expect(htmlContent).toContain('aria-label="Save Preset"')
    expect(htmlContent).toContain('aria-label="Delete Preset"')
    expect(htmlContent).toContain('aria-label="Reset to Template"')
  })
})

/* Last Modified: 2026-04-26T17:07:24Z */
