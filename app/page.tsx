import { CourseStructure } from '@/components/CouseStructure'
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
    </main>
  )
}
