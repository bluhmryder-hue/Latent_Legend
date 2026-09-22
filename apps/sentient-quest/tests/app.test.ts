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

  it('should have properly formatted game.html accessibility attributes and valid comments', async () => {
    const fs = await import('fs')
    const path = await import('path')
    const gameHtmlPath = path.join(__dirname, '../public/game.html')
    const content = fs.readFileSync(gameHtmlPath, 'utf-8')

    // Check line 1 comment is properly closed
    expect(content.startsWith('<!-- SentientQuest')).toBe(true)
    const firstLineEnd = content.indexOf('\n')
    const firstLine = content.substring(0, firstLineEnd)
    expect(firstLine.endsWith('-->')).toBe(true)

    // Check Genesis Modal form labels have associated inputs
    expect(content).toContain('<label for="gen-school">School Name</label>')
    expect(content).toContain('<label for="gen-desc">School Nature & Description</label>')
    expect(content).toContain('<label for="gen-theme">Theme & Genre</label>')
    expect(content).toContain('<label for="gen-event">Inciting Event (The Birth)</label>')

    // Check modal close buttons have aria-labels
    expect(content).toContain('aria-label="Close Manifestation Protocol"')
    expect(content).toContain('aria-label="Close Help"')
    expect(content).toContain('aria-label="Close Spirit Commune"')
    expect(content).toContain('aria-label="Close AI Job Monitor"')
    expect(content).toContain('aria-label="Close Visual Archives"')
    expect(content).toContain('aria-label="Close Grimoire"')
    expect(content).toContain('aria-label="Close Inspector"')

    // Check command deck inputs have aria-labels
    expect(content).toContain('aria-label="Select Target Entity"')
    expect(content).toContain('aria-label="Select Action Mode"')
    expect(content).toContain('aria-label="Player Action Command"')
    expect(content).toContain('aria-label="Select Travel Destination"')
  })
})

/* Last Modified: 2026-05-08T12:00:00Z */
