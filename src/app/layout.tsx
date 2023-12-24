import type { Metadata } from 'next'
import { GoogleTagManager } from '@next/third-parties/google'
import Header from '@/components/header'
import Footer from '@/components/footer'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NODE_ENV === 'production' ? 'https://c7e715d1b04b17683718fb1e8944cc28.github.io' : 'http://localhost:3000'),
  title: 'Lami',
  description: 'Lami - Python & TypeScript Developer',
  keywords: ['Lami', 'Python', 'TypeScript', 'Developer', 'FastAPI', 'Next.js'],
  openGraph: {
    type: 'website',
    title: 'Lami',
    description: 'Lami - Python & TypeScript Developer',
    url: '/',
    siteName: 'Lami',
    images: [
      {
        url: '/open-graph.png',
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
    images: [
      {
        url: '/open-graph.png',
        width: 1200,
        height: 630
      }
    ]
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
