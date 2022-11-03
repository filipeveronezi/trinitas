import { DayProps } from './Day'

interface ICalendarData {
  courseName: string
  teacher: string
  classDays: DayProps[]
}

const calendarData: ICalendarData[] = [
  {
    courseName: 'Ética cristã',
    teacher: 'Prof. Davi Cáceres',
    classDays: [
      {
        number: '11',
        month: 'february'
      },
      {
        number: '11',
        month: 'march'
      },
      {
        number: '08',
        month: 'april'
      }
    ]
  },
  {
    courseName: 'Introdução à Hermenêutica',
    teacher: 'Prof. Helder Cardin',
    classDays: [
      {
        number: '20',
        month: 'may'
      },
      {
        number: '10',
        month: 'june'
      },
      {
        number: '19',
        month: 'august'
      }
    ]
  },
  {
    courseName: 'Introdução à Teologia Sistemática',
    teacher: 'Prof. Pedro Wazen de Freitas',
    classDays: [
      {
        number: '23',
        month: 'september'
      },
      {
        number: '28',
        month: 'october'
      },
      {
        number: '18',
        month: 'november'
      }
    ]
  }
]

export { calendarData }
