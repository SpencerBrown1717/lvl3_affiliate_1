import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LVL3.ai - Affiliate Marketing Portal',
  description: 'Join LVL3.ai affiliate program and earn $5 for each successful referral. Share your unique link and start earning today.',
  keywords: 'affiliate marketing, LVL3.ai, referral program, earn money, B2B',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
} 