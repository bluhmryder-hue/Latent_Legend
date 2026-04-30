export const metadata = {
  title: 'SentientQuest',
  description: 'An Emergent Simulation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{
        margin: 0,
        padding: 0,
        width: "100vw",
        height: "100vh",
        overflow: "hidden"
      }}>
        {children}
      </body>
    </html>
  )
}

/* Last Modified: 2026-05-20T12:00:00Z */
