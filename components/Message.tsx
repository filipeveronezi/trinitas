import { HTMLAttributes } from 'react'

interface MessageProps extends HTMLAttributes<HTMLDivElement> {
  isActive: boolean
}

export function Message(props: MessageProps) {
  return (
    <>
      {props.isActive ? (
        <span {...props} className="fixed inset-x-0 bottom-10 z-10 mx-10 max-w-max animate-fade-up rounded-xl bg-black p-6 font-bold text-white sm:mx-auto">
          {props.children}
        </span>
      ) : null}
    </>
  )
}
