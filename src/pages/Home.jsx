import { Hero } from '../components/sections/Hero'
import { Projects } from '../components/sections/Projects'
import { About } from '../components/sections/About'
import { Skills } from '../components/sections/Skills'
import { Contact } from '../components/sections/Contact'

export const Home = () => {
  return (
    <>
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Contact />
    </>
  )
}
