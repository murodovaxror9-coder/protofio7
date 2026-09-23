import { ThemeProvider } from './components/ThemeProvider'
import { LanguageProvider } from './i18n/LanguageContext'
import { About } from './sections/About'
import { AITools } from './sections/AITools'
import { Certificates } from './sections/Certificates'
import { Contact } from './sections/Contact'
import { Experience } from './sections/Experience'
import { Footer } from './sections/Footer'
import { Hero } from './sections/Hero'
import { Navbar } from './sections/Navbar'
import { Projects } from './sections/Projects'
import { TechStack } from './sections/TechStack'

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="relative min-h-screen bg-[#0a0a0f] text-[#e4e4ec] light:bg-[#f7f7fb] light:text-[#16161f]">
          <Navbar />
          <main>
            <Hero />
            <About />
            <TechStack />
            <Experience />
            <Certificates />
            <Projects />
            <AITools />
            <Contact />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App
