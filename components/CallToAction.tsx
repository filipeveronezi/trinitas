import { Button } from './Button'

export function CallToAction() {
  return (
    <section className="flex h-screen flex-col items-center justify-center gap-10 bg-black px-10 text-white">
      <span className="max-w-[500px] text-center text-5xl font-bold md:text-8xl">Vagas limitadas!</span>
      <Button color="black">Inscreva-se agora</Button>
    </section>
  )
}
