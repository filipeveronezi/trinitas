import { DayProps } from './Day'

interface ICalendarData {
  courseName: string
  teacher: string
  classDays: DayProps[]
}

const calendarData: ICalendarData[] = [
  {
    courseName: 'Teologia Bíblica do Antigo Testamento',
    teacher: 'Prof. Filipe Santos',
    classDays: [
      {
        number: '17',
        month: 'february'
      },
      {
        number: '16',
        month: 'march'
      },
      {
        number: '13',
        month: 'april'
      }
    ]
  },
  {
    courseName: 'Família Cristã',
    teacher: 'Prof. Ivis Fernandes',
    classDays: [
      {
        number: '18',
        month: 'may'
      },
      {
        number: '08',
        month: 'june'
      },
      {
        number: '03',
        month: 'august'
      }
    ]
  },
  {
    courseName: 'Vida de Cristo',
    teacher: 'Prof. Roni Santos',
    classDays: [
      {
        number: '21',
        month: 'september'
      },
      {
        number: '19',
        month: 'october'
      },
      {
        number: '09',
        month: 'november'
      }
    ]
  }
]

export { calendarData }
