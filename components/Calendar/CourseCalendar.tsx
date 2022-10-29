import { Day, DayProps } from './Day'

interface CourseCalendarProps {
  courseName: string
  teacher: string
  classDays: DayProps[]
}

export function CourseCalendar(props: CourseCalendarProps) {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-4xl font-bold md:text-6xl">{props.courseName}</h2>
      <span className="text-xl">{props.teacher}</span>
      <div className="mt-5 flex flex-wrap gap-5 md:gap-20">
        {props.classDays.map((classDay, index) => (
          <Day key={index} {...classDay} />
        ))}
      </div>
    </div>
  )
}
