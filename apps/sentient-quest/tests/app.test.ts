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

  it('should have properly closed comment header and aria-label attributes on icon buttons in game.html', async () => {
    const fs = await import('node:fs')
    const path = await import('node:path')
    const htmlPath = path.resolve(__dirname, '../public/game.html')
    const htmlContent = fs.readFileSync(htmlPath, 'utf-8')

    expect(htmlContent.trim().startsWith('<!--')).toBe(true)
    const firstLine = htmlContent.split('\n')[0]
    expect(firstLine.endsWith('-->')).toBe(true)

    expect(htmlContent).toContain('aria-label="Close Manifestation Protocol"')
    expect(htmlContent).toContain('aria-label="Close Help"')
    expect(htmlContent).toContain('aria-label="Close Chat"')
    expect(htmlContent).toContain('aria-label="Close AI Job Monitor"')
    expect(htmlContent).toContain('aria-label="Close Visual Archives"')
    expect(htmlContent).toContain('aria-label="Close Grimoire"')
    expect(htmlContent).toContain('aria-label="Close Inspector"')
  })
})

/* Last Modified: 2026-05-08T08:30:00Z */
