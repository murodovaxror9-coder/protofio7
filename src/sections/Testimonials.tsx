import { ArrowUpRight, MessageSquareQuote, Quote } from 'lucide-react'
import { GlassCard } from '../components/ui/GlassCard'
import { SectionHeading } from '../components/ui/SectionHeading'
import { profile } from '../data/profile'
import { testimonials } from '../data/testimonials'
import { useLanguage } from '../hooks/useLanguage'
import { useT } from '../hooks/useT'

export function Testimonials() {
  const t = useT()
  const { lang } = useLanguage()
  const published = testimonials.filter((item) => item.approvedForPublication && item.name.trim() && item.quote[lang].trim())

  return (
    <section id="testimonials" className="relative scroll-mt-24 py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow={t('testimonials.eyebrow')} title={t('testimonials.title')} />
        {published.length ? (
          <>
            <p className="mx-auto -mt-6 mb-10 max-w-xl text-center text-sm leading-relaxed text-white/60 light:text-black/60">{t('testimonials.description')}</p>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {published.map((item) => (
                <GlassCard key={item.id} className="flex h-full flex-col">
                  <Quote size={28} aria-hidden="true" className="mb-5 text-violet-400" />
                  <blockquote className="flex-1 text-base leading-relaxed text-white/80 light:text-black/80">“{item.quote[lang]}”</blockquote>
                  <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5 light:border-black/10">
                    <span aria-hidden="true" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-violet-400/15 text-sm font-semibold text-violet-300 light:text-violet-700">
                      {item.name.split(/\s+/).filter(Boolean).slice(0, 2).map((part) => Array.from(part)[0]).join('')}
                    </span>
                    <div>
                      <p className="text-sm font-semibold">{item.name}</p>
                      <p className="mt-1 text-xs text-white/50 light:text-black/60">{item.role[lang]}</p>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </>
        ) : (
          <GlassCard className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-violet-400/20 bg-gradient-to-br from-violet-500/15 to-cyan-400/10 text-violet-300 light:text-violet-700">
              <MessageSquareQuote size={30} strokeWidth={1.5} aria-hidden="true" />
            </span>
            <div>
              <h3 className="text-lg font-semibold">{t('testimonials.emptyTitle')}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60 light:text-black/60">{t('testimonials.emptyDescription')}</p>
              <a href={`mailto:${profile.email}?subject=${encodeURIComponent(t('testimonials.emailSubject'))}`} className="mt-4 inline-flex items-center gap-2 rounded-full border border-violet-400/30 px-4 py-2 text-sm font-medium text-violet-300 transition-colors hover:bg-violet-400/10 light:text-violet-700">
                {t('testimonials.action')} <ArrowUpRight size={15} />
              </a>
            </div>
          </GlassCard>
        )}
      </div>
    </section>
  )
}
