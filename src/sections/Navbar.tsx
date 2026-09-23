import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { LanguageToggle } from '../components/LanguageToggle'
import { ThemeToggle } from '../components/ThemeToggle'
import { navItems } from '../data/navigation'
import { profile } from '../data/profile'
import { useT } from '../hooks/useT'

export function Navbar() {
  const t = useT()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-[#0a0a0f]/80 light:bg-white/80 backdrop-blur-lg border-b border-white/10' : ''
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="flex flex-col leading-none">
          <span className="text-lg font-bold tracking-tight">
            {profile.name.split(' ')[0]} <span className="gradient-text">{profile.name.split(' ')[1]}</span>
          </span>
          <span className="font-mono text-[10px] font-medium tracking-[0.25em] text-white/50 light:text-black/50">
            FRONTEND DEVELOPER
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="text-sm font-medium text-white/70 transition-colors hover:text-white light:text-black/70 light:hover:text-black"
            >
              {t(item.labelKey)}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageToggle />
          <ThemeToggle />
          <a
            href="#contact"
            className="rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition-all hover:brightness-110"
          >
            {t('nav.hireMe')}
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageToggle />
          <ThemeToggle />
          <button
            type="button"
            aria-label="Menu"
            onClick={() => setIsMenuOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10"
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-white/10 bg-[#0a0a0f] light:bg-white md:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={closeMenu}
                  className="rounded-lg px-3 py-3 text-sm font-medium text-white/80 hover:bg-white/5 light:text-black/80"
                >
                  {t(item.labelKey)}
                </a>
              ))}
              <a
                href="#contact"
                onClick={closeMenu}
                className="mt-2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-5 py-3 text-center text-sm font-semibold text-white"
              >
                {t('nav.hireMe')}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
