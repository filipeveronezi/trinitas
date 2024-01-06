import { Calendar } from '@/components/Calendar'
import { CallToAction } from '@/components/CallToAction'
import { CourseStructure } from '@/components/CourseStructure'
import { FAQ } from '@/components/FAQ'
import { Hero } from '@/components/Hero'
import { WhoWeAre } from '@/components/WhoWeAre'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <CourseStructure />
      <WhoWeAre />
      <FAQ />
      <Calendar />
      <CallToAction />
    </main>
  )
}
