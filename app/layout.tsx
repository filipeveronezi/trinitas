import { Header } from '@/components/Header'
import { Space_Grotesk } from '@next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk()

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`text-black ${spaceGrotesk.className}`}>
      <head>
        <title>Trinitas</title>
        <meta name="description" content="Um curso aberto de teologia para cristãos interessados em crescer em conhecimento bíblico e teológico e em servir à igreja local" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
