import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'HAUS HINZKI - Institut für angewandte generative KI & Digitale Markenberatung',
  description: 'HAUS HINZKI macht KI nutzbar. Forschung, Schulung und Implementierung von generativer KI, kombiniert mit strategischer Digitalberatung.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className={inter.className}>
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
} 