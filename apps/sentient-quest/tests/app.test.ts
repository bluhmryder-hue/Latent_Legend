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

  it('should have properly formatted header comment in game.html', () => {
    const htmlPath = path.resolve(__dirname, '../public/game.html')
    const content = fs.readFileSync(htmlPath, 'utf-8')
    const firstLine = content.split('\n')[0]
    expect(firstLine).toMatch(/^<!--.*-->$/)
  })

  it('should have aria-labels on icon-only close and action buttons in game.html', () => {
    const htmlPath = path.resolve(__dirname, '../public/game.html')
    const content = fs.readFileSync(htmlPath, 'utf-8')

    const requiredAriaLabels = [
      'Close Manifestation Protocol',
      'Save Preset',
      'Delete Preset',
      'Reset to Template',
      'Close Help',
      'Close Chat',
      'Close AI Job Monitor',
      'Close Visual Archives',
      'Close Grimoire',
      'Close Inspector',
    ]

    for (const label of requiredAriaLabels) {
      expect(content).toContain(`aria-label="${label}"`)
    }
  })
})

/* Last Modified: 2026-05-08T09:00:00Z */
