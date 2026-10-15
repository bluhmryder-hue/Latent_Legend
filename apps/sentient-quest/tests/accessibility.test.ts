import fs from 'node:fs'
import path from 'node:path'
import { describe, expect, it } from 'vitest'

describe('Game HTML Accessibility', () => {
  it('should have properly closed header comment', () => {
    const htmlPath = path.resolve(__dirname, '../public/game.html')
    const content = fs.readFileSync(htmlPath, 'utf8')
    const firstLine = content.split('\n')[0]
    expect(firstLine).toContain('<!--')
    expect(firstLine).toContain('-->')
  })

  it('should ensure all buttons in game.html have accessible names (text or aria-label)', () => {
    const htmlPath = path.resolve(__dirname, '../public/game.html')
    const content = fs.readFileSync(htmlPath, 'utf8')

    // Find all <button ...> tags in game.html
    const buttonRegex = /<button\b([^>]*)>(.*?)<\/button>/gs
    let match: RegExpExecArray | null

    const buttons: Array<{ tag: string; attributes: string; innerHtml: string }> = []
    while ((match = buttonRegex.exec(content)) !== null) {
      buttons.push({
        tag: match[0],
        attributes: match[1],
        innerHtml: match[2].trim(),
      })
    }

    expect(buttons.length).toBeGreaterThan(0)

    for (const btn of buttons) {
      const hasAriaLabel = /aria-label\s*=\s*["'][^"']+["']/.test(btn.attributes)
      // Clean inner text (remove HTML tags and symbol entities like &times;)
      const cleanText = btn.innerHtml
        .replace(/<[^>]*>/g, '')
        .replace(/&times;/g, '')
        .trim()

      const isAccessible = hasAriaLabel || cleanText.length > 0
      expect(
        isAccessible,
        `Button missing accessible name (aria-label or visible text): ${btn.tag}`
      ).toBe(true)
    }
  })
})
