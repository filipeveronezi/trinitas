import { InformationCircleIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { Button } from '../Button'
import { FAQData } from './data'
import { QuestionAndAnswer } from './QuestionAndAnswer'

export function FAQ() {
  return (
    <section className="bg-black py-24 text-white">
      <div className="mx-auto flex w-full max-w-screen-xl flex-col gap-10 px-10">
        <h2 className="max-w-[700px] text-5xl font-bold lg:text-7xl">Tudo que você precisa saber</h2>
        {FAQData.map((questionAndAnswerProps) => (
          <QuestionAndAnswer key={questionAndAnswerProps.question} {...questionAndAnswerProps} />
        ))}
        <div className="flex items-center gap-2">
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
        </div>
        <div className="mt-10">
          <Button color="black">Inscreva-se agora</Button>
        </div>
      </div>
    </section>
  )
}
