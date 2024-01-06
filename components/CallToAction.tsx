import Link from 'next/link'
import { Button } from './Button'

export function CallToAction() {
  return (
    <section className="flex h-screen flex-col items-center justify-center gap-10 bg-black px-10 text-white">
      <span className="max-w-[500px] text-center text-5xl font-bold md:text-8xl">Vagas limitadas!</span>
      <Link href="https://wa.me/5511987713322?text=Ol%C3%A1%21%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20Curso%20Trinitas." target="_blank" rel="noopener noreferrer">
        <Button aria-label="Saiba mais" color="black">
          Saiba mais
        </Button>
      </Link>
    </section>
  )
}
