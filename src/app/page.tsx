import About from '@/components/team/About'
import Footer from '@/components/team/Footer'
import Hero from '@/components/team/Hero'
import Navbar from '@/components/team/Navbar'
import Projects from '@/components/team/Projects'
import Stack from '@/components/team/Stack'
import Team from '@/components/team/Team'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stack />
        <Projects />
        <Team />
      </main>
      <Footer />
    </>
  )
}
