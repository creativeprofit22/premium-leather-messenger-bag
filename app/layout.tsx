import type { Metadata } from 'next'
import { inter, jakarta } from '@/lib/fonts'
import { ThemeProvider } from '@/components/ThemeProvider'
import { ThemeToggle } from '@/components/ThemeToggle'
import './globals.css'

export const metadata: Metadata = {
  title: 'Premium Leather Messenger Bag | Handcrafted Italian Leather',
  description: 'Carry your essentials in timeless style. Full-grain Italian leather messenger bag with lifetime warranty. Handcrafted in small batches with premium YKK zippers and brass hardware.',
  keywords: ['leather messenger bag', 'Italian leather', 'premium bag', 'handcrafted bag', 'laptop bag'],
  openGraph: {
    title: 'Premium Leather Messenger Bag',
    description: 'Carry your essentials in timeless style.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${jakarta.variable}`}>
      <body className="font-sans">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="fixed top-4 right-4 z-50">
            <ThemeToggle />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
