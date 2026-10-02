import { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from './components/ThemeProvider'
import { LanguageProvider } from './i18n/LanguageContext'
import { Home } from './pages/Home'
import { Footer } from './sections/Footer'
import { Navbar } from './sections/Navbar'

const ProjectDetails = lazy(() => import('./pages/ProjectDetails'))
const NotFound = lazy(() => import('./pages/NotFound'))

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <BrowserRouter>
          <div className="relative min-h-screen bg-[#0a0a0f] text-[#e4e4ec] light:bg-[#f7f7fb] light:text-[#16161f]">
            <Navbar />
            <main>
              <Suspense fallback={null}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/projects/:id" element={<ProjectDetails />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App
