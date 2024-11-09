import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'IGNITE Fitness',
  description: 'Transform your life with IGNITE Fitness',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col bg-black">
          <Navigation />
          <div className="flex-1 pt-16">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
