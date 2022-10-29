import { CourseCalendar } from './CourseCalendar'
import { calendarData } from './data'

export function Calendar() {
  return (
    <section className="mx-auto flex max-w-screen-xl flex-col gap-16 px-10 py-28">
      <h2 className="max-w-[500px] text-5xl font-bold md:text-7xl">Calendário 2023</h2>
      {calendarData.map((courseCalendar, index) => (
        <CourseCalendar key={index} {...courseCalendar} />
      ))}
    </section>
  )
}