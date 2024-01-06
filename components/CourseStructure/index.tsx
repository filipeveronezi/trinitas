import { CourseYearInformation } from './CourseYearInformation'
import { courseStructureData } from './data'

export function CourseStructure() {
  return (
    <section className="mt-32 flex flex-col items-center">
      <p className="mb-10 px-10 text-3xl font-medium">São 15 disciplinas modulares divididas em 04 anos:</p>
      {courseStructureData.map((yearInformation) => (
        <CourseYearInformation key={yearInformation.subject} {...yearInformation} />
      ))}
    </section>
  )
}
