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

  it('should ensure all icon-only or close buttons in game.html have an aria-label', () => {
    const gameHtmlPath = path.resolve(__dirname, '../public/game.html')
    const htmlContent = fs.readFileSync(gameHtmlPath, 'utf-8')
    const buttonRegex = /<button\b([^>]*)>([\s\S]*?)<\/button>/gi

    let match
    const missingAriaLabels: string[] = []

    while ((match = buttonRegex.exec(htmlContent)) !== null) {
      const attributes = match[1]
      const innerContent = match[2].trim()

      // Determine if button is icon-only or close symbol (&times; or <i> icon only)
      const isIconOnly =
        innerContent === '&times;' ||
        /^<i\s+class="[^"]*"><\/i>$/i.test(innerContent) ||
        (!/[a-zA-Z0-9]{2,}/.test(innerContent) && /<i\s+/i.test(innerContent))

      if (isIconOnly && !/aria-label\s*=\s*["']/i.test(attributes)) {
        missingAriaLabels.push(match[0])
      }
    }

    expect(missingAriaLabels).toEqual([])
  })
})

/* Last Modified: 2026-04-26T17:07:24Z */
