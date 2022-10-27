interface ButtonProps {
  children: React.ReactNode
  color: 'white' | 'black'
}

const colorClassNames = {
  white: 'bg-white text-black border-black hover:bg-gray-50',
  black: 'bg-black text-white border-white hover:bg-gray-800'
}

export function Button(props: ButtonProps) {
  return <button className={`${colorClassNames[props.color]} flex items-center justify-center text-2xl border-[3px] rounded-xl px-10 py-2 transition-colors`}>{props.children}</button>
}
