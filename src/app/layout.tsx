//cler imports
import type { Metadata } from 'next'
import Header from '@/app/components/Layout/Header'
import { Geist, Geist_Mono } from 'next/font/google'
import Script from 'next/script';
import { Poppins } from 'next/font/google'
import './globals.css'
import Footer from '@/app/components/Layout/Footer'
import ScrollToTop from '@/app/components/ScrollToTop'
import Aoscompo from '@/utils/aos'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Grant Radar',
  description: 'Built for Student founders',
  icons: {
    icon: '../public/images/logo/1.png',
  },
}

const font = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${font.className}`}>
          <Aoscompo>
            <Header/>
            {children}
            <Footer />
          </Aoscompo>
          <Script src="https://waitlister.me/js/embed.js" strategy="lazyOnload" />
          <ScrollToTop />
      </body>
    </html>
  )
}
