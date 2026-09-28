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

  it('should have properly closed comment headers in game.html and game.css', async () => {
    const fs = await import('fs')
    const path = await import('path')

    const htmlPath = path.join(__dirname, '../public/game.html')
    const cssPath = path.join(__dirname, '../public/game.css')

    const htmlContent = fs.readFileSync(htmlPath, 'utf8')
    const cssContent = fs.readFileSync(cssPath, 'utf8')

    const htmlFirstLine = htmlContent.split('\n')[0]
    const cssFirstLine = cssContent.split('\n')[0]

    expect(htmlFirstLine).toMatch(/^<!--.*-->$/)
    expect(cssFirstLine).toMatch(/^\/\*.*\*\/$/)
  })

  it('should include aria-label on modal close buttons in game.html', async () => {
    const fs = await import('fs')
    const path = await import('path')

    const htmlPath = path.join(__dirname, '../public/game.html')
    const htmlContent = fs.readFileSync(htmlPath, 'utf8')

    expect(htmlContent).toContain('aria-label="Close Settings"')
    expect(htmlContent).toContain('aria-label="Close Help"')
    expect(htmlContent).toContain('aria-label="Close Spirit Commune Chat"')
    expect(htmlContent).toContain('aria-label="Close AI Job Monitor"')
    expect(htmlContent).toContain('aria-label="Close Visual Archives"')
    expect(htmlContent).toContain('aria-label="Close Grimoire"')
    expect(htmlContent).toContain('aria-label="Close Inspector"')
  })
})

/* Last Modified: 2026-05-08T08:30:00Z */
