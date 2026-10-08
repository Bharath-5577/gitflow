import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'
import { SiteFrame } from '@/components/site-frame'

export const metadata: Metadata = {
  title: 'First Site — Small steps. Real possibilities.',
  description: 'A friendly place to start making for the web. Explore practical guides, discover our approach, and find clear answers to your questions.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f8f7f3',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="light">
      <body className="antialiased">
        <SiteFrame>{children}</SiteFrame>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
