import { Button } from '@/components/Button'
import Image from 'next/image'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="flex flex-col items-center justify-center gap-5 pt-20">
      <h1 className="mt-10 px-10 text-center text-6xl font-bold lg:text-8xl">Estude as Escrituras</h1>
      <p className="max-w-[700px] px-10 text-center text-lg font-normal text-gray-600 lg:text-2xl">Somos um curso aberto de teologia, 100% presencial, destinado a cristãos interessados em servir à igreja local e crescer em conhecimento bíblico e teológico</p>
      <Link href="https://wa.me/5511987713322?text=Ol%C3%A1%21%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20Curso%20Trinitas." target="_blank" rel="noopener noreferrer">
        <Button aria-label="Saiba mais" color="white">
          Saiba mais
        </Button>
      </Link>
      <div className="relative mt-10 h-[150px] w-screen md:h-[300px] xl:h-[400px]">
        <Image src="/hero-illustration.svg" alt="Desenho de uma mesa de estudos" fill sizes="100vw" priority />
      </div>
    </section>
  )
}
