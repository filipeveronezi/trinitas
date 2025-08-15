import { DayProps } from './Day'

interface ICalendarData {
  courseName: string
  teacher: string
  classDays: DayProps[]
}

const calendarData: ICalendarData[] = [
  {
    courseName: 'Ética II',
    teacher: 'Pr. Davi Cáceres',
    classDays: [
      {
        number: '22',
        month: 'february'
      },
      {
        number: '22',
        month: 'march'
      },
      {
        number: '26',
        month: 'april'
      }
    ]
  },
  {
    courseName: 'História da Igreja I',
    teacher: 'Pr. Roni Santos',
    classDays: [
      {
        number: '10',
        month: 'may'
      },
      {
        number: '07',
        month: 'june'
      },
      {
        number: '09',
        month: 'august'
      }
    ]
  },
  {
    courseName: 'Ministério na Pós-modernidade',
    teacher: 'Pr. Carlos Felipe (Café)',
    classDays: [
      {
        number: '20',
        month: 'september'
      },
      {
        number: '11',
        month: 'october'
      },
      {
        number: '08',
        month: 'november'
      }
    ]
  }
]

export { calendarData }
