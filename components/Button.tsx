import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: 'white' | 'black'
}

const colorClassNames = {
  white: 'bg-white text-black border-black shadow-lg hover:drop-shadow-[4px_4px_0_rgba(32,32,32,1)]',
  black: 'bg-black text-white border-white hover:drop-shadow-[4px_4px_0_rgba(255,255,255,1)]'
}

export function Button({ color, ...props }: ButtonProps) {
  return (
    <button {...props} className={`${colorClassNames[color]} flex items-center justify-center rounded-xl border-[3px] px-10 py-3 text-2xl hover:translate-y-[-4px] hover:translate-x-[-4px] active:translate-x-0 active:translate-y-0 active:drop-shadow-none`}>
      {props.children}
    </button>
  )
}
