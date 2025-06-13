import type { Metadata } from 'next'
import './globals.css'
import { AuthProvider } from "../contexts/AuthContext"

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
      <body suppressHydrationWarning>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
