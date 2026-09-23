import { createContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { translations, type Lang } from './translations'

export interface LanguageContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
  toggleLang: () => void
  dict: (typeof translations)[Lang]
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)

const STORAGE_KEY = 'portfolio-lang'

function getInitialLang(): Lang {
  if (typeof window === 'undefined') return 'uz'
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === 'uz' || stored === 'en') return stored
  return 'uz'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getInitialLang)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang)
    document.documentElement.lang = lang
  }, [lang])

  const setLang = (next: Lang) => setLangState(next)
  const toggleLang = () => setLangState((prev) => (prev === 'uz' ? 'en' : 'uz'))

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, setLang, toggleLang, dict: translations[lang] }),
    [lang],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
