import { Button } from '@/components/Button'
import Image from 'next/image'

export function Hero() {
  return (
    <section className="flex flex-col items-center justify-center gap-5">
      <h1 className="font-bold text-8xl mt-16">Estude as Escrituras</h1>
      <p className="font-normal text-2xl text-gray-500 max-w-[700px] text-center">Somos um curso aberto de teologia para cristãos interessados em crescer em conhecimento bíblico e teológico e em servir à igreja local</p>
      <Button color="white">Garanta sua vaga</Button>
      <div className="relative mt-10 w-screen h-[400px]">
        <Image src="/hero-illustration.svg" alt="Desenho de uma mesa de estudos" fill />
      </div>
    </section>
  )
}
