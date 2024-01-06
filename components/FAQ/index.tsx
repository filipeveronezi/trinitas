import Link from 'next/link'
import { Button } from '../Button'
import { QuestionAndAnswer } from './QuestionAndAnswer'
import { FAQData } from './data'

export function FAQ() {
  return (
    <section id="o-curso" className="bg-black py-28 text-white">
      <div className="mx-auto flex w-full max-w-screen-xl flex-col gap-10 px-10">
        <h2 className="max-w-[700px] text-5xl font-bold lg:text-7xl">Tudo que você precisa saber</h2>
        {FAQData.map((questionAndAnswerProps) => (
          <QuestionAndAnswer key={questionAndAnswerProps.question} {...questionAndAnswerProps} />
        ))}
        {/* <div className="flex items-center gap-2">
          <div>
            <InformationCircleIcon className="h-8 w-8" />
          </div>
          <p>
            Caso deseje requerer bolsa, preencha{' '}
            <Link href="#" className="cursor-pointer font-bold underline">
              este formulário
            </Link>
            .
          </p>
        </div> */}
        <div className="mt-10">
          <Link href="https://wa.me/5511987713322?text=Ol%C3%A1%21%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20Curso%20Trinitas." target="_blank" rel="noopener noreferrer">
            <Button aria-label="Saiba mais" color="black">
              Saiba mais
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
