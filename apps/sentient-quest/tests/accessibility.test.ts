import fs from 'fs'
import path from 'path'
import { describe, it, expect } from 'vitest'

describe('Accessibility Audit for game.html', () => {
  it('all icon-only buttons should have a non-empty aria-label attribute', () => {
    const htmlPath = path.resolve(__dirname, '../public/game.html')
    const htmlContent = fs.readFileSync(htmlPath, 'utf8')

    // Regex to match button tags and their inner HTML
    const buttonRegex = /<button\b([^>]*)>([\s\S]*?)<\/button>/gi
    let match: RegExpExecArray | null

    const missingAriaLabels: string[] = []

    while ((match = buttonRegex.exec(htmlContent)) !== null) {
      const attributes = match[1]
      const innerHtml = match[2].trim()

      // Strip tags and entities to see if there is visible text
      const visibleText = innerHtml
        .replace(/<[^>]+>/g, '')
        .replace(/&times;/gi, '')
        .trim()

      // If there is no visible text, it is an icon-only button and requires an aria-label
      if (!visibleText) {
        const ariaLabelMatch = attributes.match(/aria-label=["']([^"']+)["']/i)
        if (!ariaLabelMatch || !ariaLabelMatch[1].trim()) {
          missingAriaLabels.push(match[0])
        }
      }
    }

    expect(missingAriaLabels).toEqual([])
  })
})

/* Last Modified: 2026-05-08T12:00:00Z */
