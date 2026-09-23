import { useLanguage } from '../hooks/useLanguage'

export function LanguageToggle() {
  const { lang, toggleLang } = useLanguage()

  return (
    <button
      type="button"
      onClick={toggleLang}
      aria-label="Switch language"
      className="flex h-10 items-center justify-center rounded-full border border-white/10 px-3 font-mono text-xs font-semibold tracking-wide text-current transition-colors hover:border-cyan-400/50 hover:bg-white/5"
    >
      {lang === 'uz' ? 'UZ' : 'EN'}
    </button>
  )
}
