import Link from 'next/link'

export function WhoWeAre() {
  return (
    <section id="quem-somos" className="mx-auto flex max-w-screen-xl flex-col gap-24 px-10 py-28">
      <div className="flex flex-col gap-5">
        <h2 className="text-5xl font-bold lg:text-7xl">Quem somos?</h2>
        <p className="text-gray-700 lg:text-lg xl:max-w-[80%]">
          A{' '}
          <Link className="text-black underline" href="https://www.batistatrindade.org.br/" target="_blank" rel="noreferrer noopener">
            Igreja Batista da Trindade
          </Link>{' '}
          é uma igreja batista reformada que existe desde 2006 em Atibaia. Uma das ênfases da igreja é o ensino bíblico e teológico e, pela necessidade de preparar melhor os próprios membros da igreja, surgiu a ideia do Curso Trinitas. Os professores são pastores e mestres reconhecidos pela excelência acadêmica e com experiência de ensino em seminários e na igreja local.
        </p>
      </div>
      <div className="flex flex-col gap-5 text-right">
        <h2 className="text-5xl font-bold lg:text-7xl">No que cremos?</h2>
        <p className="text-gray-700 lg:text-lg">
          1. Na inspiração verbal e plenária das Escrituras;
          <br />
          2. Na aplicabilidade das Escrituras como única regra de fé e prática;
          <br />
          3. Na Trindade - uma essência que subsiste eternamente em três pessoas: Pai, Filho e Espírito Santo;
          <br />
          4. Em Jesus Cristo, plenamente homem e plenamente Deus, salvador de todo aquele que crê;
          <br />
          5. Na salvação por meio da fé, por causa da graça e com base na obra de Cristo;
          <br />
          6. Na volta visível e pessoal de Jesus Cristo;
          <br />
          7. Na vida eterna para todos os que confiam em Jesus Cristo para salvação.
        </p>
      </div>
    </section>
  )
}
