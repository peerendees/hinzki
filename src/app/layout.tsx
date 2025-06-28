import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'HAUS HINZKI - Institut für angewandte generative KI & Digitale Markenberatung',
  description: 'HAUS HINZKI macht KI nutzbar. Forschung, Schulung und Implementierung von generativer KI, kombiniert mit strategischer Digitalberatung.',
  metadataBase: new URL('https://haushinzki.de'),
  keywords: 'KI-Institut, Generative KI, KI-Schulung, Digitale Markenberatung, KI-Agentur, KI-Beratung, KI-Entwicklung, Köln',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
} 