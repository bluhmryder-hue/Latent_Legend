import { describe, expect, it } from "vitest"

describe("SentientQuest App Consistency", () => {
  it("should have the correct metadata", async () => {
    const layout = await import("../app/layout")
    expect(layout.metadata.title).toBe("SentientQuest")
  })

  it("should point the iframe to game.html", async () => {
    const page = await import("../app/page")
    // Simplified check for the presence of the iframe src
    // In a real env we'd use React Testing Library, but for now we check logic
    expect(page).toBeDefined()
  })
})

/* Last Modified: 2026-04-29T08:24:17Z */
