import { DayProps } from './Day'

interface ICalendarData {
  courseName: string
  teacher: string
  classDays: DayProps[]
}

const calendarData: ICalendarData[] = [
  {
    courseName: 'Teologia Bíblica do NT',
    teacher: 'Roni',
    classDays: [
      {
        number: '07',
        month: 'march'
      },
      {
        number: '18',
        month: 'april'
      }
    ]
  },
  {
    courseName: 'Teologia Sistemática II',
    teacher: 'Pedro',
    classDays: [
      {
        number: '30',
        month: 'may'
      },
      {
        number: '27',
        month: 'june'
      }
    ]
  },
  {
    courseName: 'Ética III',
    teacher: 'Davi',
    classDays: [
      {
        number: '15',
        month: 'august'
      },
      {
        number: '05',
        month: 'september'
      }
    ]
  },
  {
    courseName: 'Aconselhamento Bíblico',
    teacher: 'Ivis',
    classDays: [
      {
        number: '03',
        month: 'october'
      },
      {
        number: '07',
        month: 'november'
      }
    ]
  }
]

export { calendarData }
