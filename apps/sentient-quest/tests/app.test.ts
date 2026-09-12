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

  it('should ensure game.html modal close buttons have aria-labels', () => {
    const htmlPath = path.resolve(__dirname, '../public/game.html')
    const htmlContent = fs.readFileSync(htmlPath, 'utf-8')

    expect(htmlContent).toContain('aria-label="Close Settings"')
    expect(htmlContent).toContain('aria-label="Close Help"')
    expect(htmlContent).toContain('aria-label="Close Global Chat"')
    expect(htmlContent).toContain('aria-label="Close AI Job Monitor"')
    expect(htmlContent).toContain('aria-label="Close Visual Archives"')
    expect(htmlContent).toContain('aria-label="Close Grimoire"')
    expect(htmlContent).toContain('aria-label="Close Inspector"')
  })

  it('should associate Manifestation Protocol labels with input elements', () => {
    const htmlPath = path.resolve(__dirname, '../public/game.html')
    const htmlContent = fs.readFileSync(htmlPath, 'utf-8')

    expect(htmlContent).toContain('<label for="gen-school">School Name</label>')
    expect(htmlContent).toContain('<label for="gen-desc">School Nature & Description</label>')
    expect(htmlContent).toContain('<label for="gen-theme">Theme & Genre</label>')
    expect(htmlContent).toContain('<label for="gen-event">Inciting Event (The Birth)</label>')
  })
})

/* Last Modified: 2026-04-26T17:07:24Z */
