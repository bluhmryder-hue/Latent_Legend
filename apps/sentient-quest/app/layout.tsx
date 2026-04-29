import { Metadata } from "next"

export const metadata: Metadata = {
  title: "SentientQuest",
  description: "An Agentic Powered Game",
}

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
