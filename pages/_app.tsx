import { Header } from '@/components/Header'
import { trpc } from '@/utils/trpc'
import { Space_Grotesk } from '@next/font/google'
import type { AppProps } from 'next/app'
import '../styles/globals.css'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={spaceGrotesk.className}>
      <Header />
      <Component {...pageProps} />
    </div>
  )
}

export default trpc.withTRPC(MyApp)
