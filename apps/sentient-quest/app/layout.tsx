import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "SentientQuest",
  description: "An emergent simulation of psychological manifestation.",
}

/* Last Modified: 2026-05-15T12:00:00Z */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          padding: 0,
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        {children}
      </body>
    </html>
  )
}
