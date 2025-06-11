import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TechSupport Pro',
  description: 'IT Support Services',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
