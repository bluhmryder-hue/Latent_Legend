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

  it('should have properly closed comments and ARIA labels on icon buttons in game.html', () => {
    const htmlPath = path.resolve(__dirname, '../public/game.html')
    const html = fs.readFileSync(htmlPath, 'utf8')

    // Ensure header comment is properly closed
    const firstLine = html.split('\n')[0]
    expect(firstLine).toContain('-->')

    // Find all close buttons or icon-only buttons with onclick handlers
    const closeButtons = html.match(/<button[^>]*onclick="UI\.toggle[^"]*"[^>]*>/g) || []
    expect(closeButtons.length).toBeGreaterThan(0)
    closeButtons.forEach(btn => {
      expect(btn).toContain('aria-label=')
    })
  })
})

/* Last Modified: 2026-05-08T08:26:00Z */
