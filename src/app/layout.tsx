import type { Metadata } from 'next'
import { GoogleTagManager } from '@next/third-parties/google'
import Header from '@/components/header'
import Footer from '@/components/footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'Lami',
  description: 'Lami - Python & TypeScript Developer',
  keywords: ['Lami', 'Python', 'TypeScript', 'Developer', 'FastAPI', 'Next.js'],
  openGraph: {
    type: 'website',
    title: 'Lami',
    description: 'Lami - Python & TypeScript Developer',
    url: 'https://c7e715d1b04b17683718fb1e8944cc28.github.io/',
    siteName: 'Lami',
    images: [
      {
        url: 'https://c7e715d1b04b17683718fb1e8944cc28.github.io/open-graph.png',
        width: 1200,
        height: 630
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lami',
    description: 'Lami - Python & TypeScript Developer',
    creator: '@l2',
    images: ['https://c7e715d1b04b17683718fb1e8944cc28.github.io/open-graph.png']
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className="bg-gray-100">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
      <GoogleTagManager gtmId='GTM-NKZ4VKWK' />
    </html>
  )
}
