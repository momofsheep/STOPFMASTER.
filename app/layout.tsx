import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'STOPFMASTER',
  description: 'Zigarettenstopfapp',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
