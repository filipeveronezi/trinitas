import { CheckIcon } from '@heroicons/react/24/outline'

interface QuestionAndAnswerProps {
  question: string
  answer: string
}

export function QuestionAndAnswer(props: QuestionAndAnswerProps) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <CheckIcon className="h-6 w-6" />
        <h3 className="text-2xl font-bold">{props.question}</h3>
      </div>
      <p className="text-lg">{props.answer}</p>
    </div>
  )
}
