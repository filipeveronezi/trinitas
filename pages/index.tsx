import { Calendar } from '@/components/Calendar'
import { CallToAction } from '@/components/CallToAction'
import { CourseStructure } from '@/components/CouseStructure'
import { FAQ } from '@/components/FAQ'
import { Hero } from '@/components/Hero'
import { WhoWeAre } from '@/components/WhoWeAre'
import Head from 'next/head'

export async function getStaticProps() {
  return {
    props: {}
  }
}

export default function IndexPage() {
  return (
    <>
      <Head>
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

        <meta name="robots" content="all" />
      </Head>
      <main className="overflow-hidden">
        <Hero />
        <CourseStructure />
        <WhoWeAre />
        <FAQ />
        <Calendar />
        <CallToAction />
      </main>
    </>
  )
}
