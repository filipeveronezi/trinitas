import { HTMLAttributes } from 'react'

interface ErrorMessageProps extends HTMLAttributes<HTMLDivElement> {
  isActive: boolean
}

export function ErrorMessage(props: ErrorMessageProps) {
  return (
    <>
      {props.isActive ? (
        <span {...props} className="fixed inset-x-0 bottom-10 z-10 mx-auto max-w-max animate-fade-up rounded-xl bg-red-300 p-6 font-bold text-red-700">
          {props.children}
        </span>
      ) : null}
    </>
  )
}
