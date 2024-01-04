import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Bobu Originals s.r.o - Krejčovství a šicí dílna',
  description: 'Krejčovství a šicí dílna - Bobu originals, s.r.o. sociální podnik',
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
