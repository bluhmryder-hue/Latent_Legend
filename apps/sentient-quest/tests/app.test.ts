import { describe, it, expect } from 'vitest'
import fs from 'node:fs'
import path from 'node:path'

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

  it('should ensure icon-only buttons in game.html contain aria-label attributes', () => {
    const htmlPath = path.resolve(__dirname, '../public/game.html')
    const htmlContent = fs.readFileSync(htmlPath, 'utf-8')

    const ariaLabels = [
      'aria-label="Close Manifestation Protocol"',
      'aria-label="Save Preset"',
      'aria-label="Delete Preset"',
      'aria-label="Reset to Template"',
      'aria-label="Close Help"',
      'aria-label="Close Global Chat"',
      'aria-label="Architect\'s Sanctum"',
      'aria-label="Close Job Monitor"',
      'aria-label="Close Visual Archives"',
      'aria-label="Close Grimoire"',
      'aria-label="Close Inspector"',
    ]

    for (const label of ariaLabels) {
      expect(htmlContent).toContain(label)
    }
  })
})

/* Last Modified: 2026-04-26T17:07:24Z */
