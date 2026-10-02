import { About } from '../sections/About'
import { AITools } from '../sections/AITools'
import { Contact } from '../sections/Contact'
import { CurrentlyLearning } from '../sections/CurrentlyLearning'
import { Experience } from '../sections/Experience'
import { Hero } from '../sections/Hero'
import { Projects } from '../sections/Projects'
import { TechStack } from '../sections/TechStack'
import { Testimonials } from '../sections/Testimonials'

export function Home() {
  return (
    <>
      <Hero />
      <About />
      <TechStack />
      <Experience />
      <CurrentlyLearning />
      <Projects />
      <AITools />
      <Testimonials />
      <Contact />
    </>
  )
}
