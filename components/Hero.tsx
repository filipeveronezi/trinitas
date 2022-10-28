import { Button } from '@/components/Button'
import Image from 'next/image'

export function Hero() {
  return (
    <section className="flex flex-col items-center justify-center gap-5">
      <h1 className="mt-10 px-10 text-center text-6xl font-bold lg:text-8xl">Estude as Escrituras</h1>
      <p className="max-w-[700px] px-10 text-center text-lg font-normal text-gray-600 lg:text-2xl">Somos um curso aberto de teologia para cristãos interessados em crescer em conhecimento bíblico e teológico e em servir à igreja local</p>
      <Button color="white">Garanta sua vaga</Button>
      <div className="relative mt-10 h-[150px] w-screen md:h-[300px] xl:h-[400px]">
        <Image src="/hero-illustration.svg" alt="Desenho de uma mesa de estudos" fill sizes="100vw" priority />
      </div>
    </section>
  )
}
