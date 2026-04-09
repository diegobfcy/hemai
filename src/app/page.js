import Navbar     from '@/components/Navbar'
import Hero       from '@/components/Hero'
import Problem    from '@/components/Problem'
import Solution   from '@/components/Solution'
import HowItWorks from '@/components/HowItWorks'
import Traction   from '@/components/Traction'
import Pricing    from '@/components/Pricing'
import Team       from '@/components/Team'
import Contact    from '@/components/Contact'
import Footer     from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <Traction />
        <Pricing />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  )
}