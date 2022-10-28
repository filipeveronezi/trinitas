import { Button } from '@/components/Button'
import Image from 'next/image'

export function Hero() {
  return (
    <section className="flex flex-col items-center justify-center gap-5">
      <h1 className="mt-16 text-8xl font-bold">Estude as Escrituras</h1>
      <p className="max-w-[700px] text-center text-2xl font-normal text-gray-600">Somos um curso aberto de teologia para cristãos interessados em crescer em conhecimento bíblico e teológico e em servir à igreja local</p>
      <Button color="white">Garanta sua vaga</Button>
      <div className="relative mt-10 h-[400px] w-screen">
        <Image src="/hero-illustration.svg" alt="Desenho de uma mesa de estudos" fill />
      </div>
    </section>
  )
}
