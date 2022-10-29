export interface DayProps {
  number: string
  month: 'january' | 'february' | 'march' | 'april' | 'may' | 'june' | 'july' | 'august' | 'september' | 'october' | 'november' | 'december'
}

const monthNames = {
  january: 'jan',
  february: 'fev',
  march: 'mar',
  april: 'abr',
  may: 'mai',
  june: 'jun',
  july: 'jul',
  august: 'ago',
  september: 'set',
  october: 'out',
  november: 'nov',
  december: 'dez'
}

export function Day(props: DayProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl border-4 border-black bg-black font-bold">
      <span className="flex w-full items-center justify-center rounded-t-3xl bg-black py-1 text-xl uppercase text-white md:py-2 md:text-3xl">{monthNames[props.month]}</span>
      <span className="flex h-full w-full items-center justify-center rounded-b-[1.3rem] bg-white py-2 px-7 text-4xl text-black md:py-6 md:px-12 md:text-7xl">{props.number}</span>
    </div>
  )
}
