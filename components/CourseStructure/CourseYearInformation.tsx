export interface CourseYearInformationProps {
  year: '01' | '02' | '03' | '04'
  subject: string
  description: string
  bgColor: 'white' | 'black'
}

const bgColorClassNames = {
  white: 'bg-white text-black',
  black: 'bg-black text-white'
}

export function CourseYearInformation(props: CourseYearInformationProps) {
  return (
    <div className={`flex w-full py-10 xl:py-16 ${bgColorClassNames[props.bgColor]}`}>
      <div className="relative mx-auto flex w-full max-w-screen-xl flex-col gap-5 px-10 xl:items-center xl:justify-center">
        <h2 className="order-2 text-3xl font-bold md:text-5xl">{props.subject}</h2>
        <p className="order-3 text-xl font-medium">{props.description}</p>
        <span className="inset-y-0 left-10 order-1 my-auto flex text-3xl font-bold xl:absolute xl:items-center xl:justify-center xl:text-6xl">{props.year}</span>
      </div>
    </div>
  )
}
