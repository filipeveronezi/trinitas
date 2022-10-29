import { Header } from '@/components/Header'
import { Space_Grotesk } from '@next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`scroll-smooth text-black ${spaceGrotesk.className}`}>
      <head>
        <title>Curso Trinitas</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta name="description" content="Um curso aberto de teologia para cristãos interessados em crescer em conhecimento bíblico e teológico e em servir à igreja local" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="title" content="Curso Trinitas" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.cursotrinitas.com.br/" />
        <meta property="og:title" content="Curso Trinitas" />
        <meta property="og:description" content="Um curso aberto de teologia para cristãos interessados em crescer em conhecimento bíblico e teológico e em servir à igreja local" />
        <meta property="og:image" content="/trinitas-introduction.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.cursotrinitas.com.br/" />
        <meta property="twitter:title" content="Curso Trinitas" />
        <meta property="twitter:description" content="Um curso aberto de teologia para cristãos interessados em crescer em conhecimento bíblico e teológico e em servir à igreja local" />
        <meta property="twitter:image" content="/trinitas-introduction.png" />
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
