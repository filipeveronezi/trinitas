import { Header } from '@/components/Header'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'

export const metadata = {
  metadataBase: new URL('https://cursotrinitas.com.br'),
  title: 'Curso Trinitas',
  description: 'Um curso aberto de teologia para cristãos interessados em crescer em conhecimento bíblico e teológico e em servir à igreja local'
}

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap'
})

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={spaceGrotesk.className}>
      <body className="antialiased">
        <Header />
        {children}
      </body>
    </html>
  )
}
