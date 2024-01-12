import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'Bara Japanese language institute',
  description: 'Learn Japanese with Bara Japanese language institute',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
