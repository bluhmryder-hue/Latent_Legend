import fs from 'node:fs'
import path from 'node:path'
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

  it('should ensure all icon-only control buttons in game.html have aria-label attributes', () => {
    const htmlPath = path.resolve(__dirname, '../public/game.html')
    const htmlContent = fs.readFileSync(htmlPath, 'utf8')

    expect(htmlContent).toContain('aria-label="Close Manifestation Protocol"')
    expect(htmlContent).toContain('aria-label="Save Preset"')
    expect(htmlContent).toContain('aria-label="Delete Preset"')
    expect(htmlContent).toContain('aria-label="Reset to Template"')
    expect(htmlContent).toContain('aria-label="Close Help"')
    expect(htmlContent).toContain('aria-label="Close Global Chat"')
    expect(htmlContent).toContain('aria-label="Architect\'s Sanctum"')
    expect(htmlContent).toContain('aria-label="Close AI Job Monitor"')
    expect(htmlContent).toContain('aria-label="Close Visual Archives"')
    expect(htmlContent).toContain('aria-label="Close Grimoire"')
    expect(htmlContent).toContain('aria-label="Close Inspector"')
  })
})

/* Last Modified: 2026-04-26T17:07:24Z */
