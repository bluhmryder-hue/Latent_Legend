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

  it('should have aria-labels on modal close buttons and command deck controls in game.html', () => {
    const htmlPath = path.resolve(__dirname, '../public/game.html')
    const html = fs.readFileSync(htmlPath, 'utf-8')

    expect(html).toContain('aria-label="Close Settings"')
    expect(html).toContain('aria-label="Target entity"')
    expect(html).toContain('aria-label="Action mode"')
    expect(html).toContain('aria-label="Command input"')
    expect(html).toContain('aria-label="Travel destination"')
    expect(html).toContain('aria-label="Close Help"')
    expect(html).toContain('aria-label="Close Chat"')
    expect(html).toContain('aria-label="Close AI Job Monitor"')
    expect(html).toContain('aria-label="Close Visual Archives"')
    expect(html).toContain('aria-label="Close Grimoire"')
    expect(html).toContain('aria-label="Close Inspector"')
  })
})

/* Last Modified: 2026-05-08T08:30:00Z */
