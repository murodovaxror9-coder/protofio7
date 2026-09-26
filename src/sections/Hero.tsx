import { motion } from 'framer-motion'
import { ArrowRight, Download, Mail } from 'lucide-react'
import { Badge } from '../components/ui/Badge'
import { stats } from '../data/stats'
import { useCountUp } from '../hooks/useCountUp'
import { useLanguage } from '../hooks/useLanguage'
import { useT } from '../hooks/useT'
import { useTypingEffect } from '../hooks/useTypingEffect'

function StatCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const count = useCountUp(value, true)
  return (
    <div className="flex flex-col items-center gap-1 sm:items-start">
      <span className="text-3xl font-bold sm:text-4xl">
        <span className="gradient-text">{count}</span>
        <span className="gradient-text">{suffix}</span>
      </span>
      <span className="text-xs font-medium text-white/50 light:text-black/50">{label}</span>
    </div>
  )
}

export function Hero() {
  const t = useT()
  const { dict } = useLanguage()
  const typedRole = useTypingEffect(dict.hero.typingRoles as unknown as string[])

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="bg-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />
      <div className="glow-orb -left-24 top-10 h-72 w-72 bg-violet-500" />
      <div className="glow-orb right-0 top-40 h-72 w-72 bg-cyan-400" />

      <div className="mx-auto grid max-w-6xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge>
              <span className="pulse-dot h-2 w-2 rounded-full bg-emerald-400" />
              {t('hero.badge')}
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
          >
            {t('hero.greeting')} <span className="gradient-text">Axror Murodov</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3 flex h-8 items-center font-mono text-lg text-cyan-400 sm:text-xl"
          >
            {typedRole}
            <span className="typing-cursor h-6" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-5 max-w-lg text-base text-white/60 light:text-black/60"
          >
            {t('hero.description')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition-all hover:brightness-110"
            >
              {t('hero.ctaPrimary')} <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold transition-all hover:border-violet-400/60 hover:bg-white/5"
            >
              <Mail size={16} /> {t('hero.ctaSecondary')}
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold transition-all hover:border-cyan-400/60 hover:bg-white/5"
            >
              <Download size={16} /> {t('hero.ctaResume')}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 flex justify-center gap-10 border-t border-white/10 pt-8 sm:justify-start"
          >
            {stats.map((stat) => (
              <StatCounter key={stat.id} value={stat.value} suffix={stat.suffix} label={t(stat.labelKey)} />
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="glass-card overflow-hidden rounded-2xl shadow-2xl shadow-violet-500/10">
            <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-400/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
              <span className="h-3 w-3 rounded-full bg-green-400/80" />
              <span className="ml-2 font-mono text-xs text-white/40 light:text-black/40">
                {t('hero.terminal.title')}
              </span>
            </div>
            <div className="space-y-3 p-5 font-mono text-sm">
              <div className="text-emerald-400">{t('hero.terminal.whoamiCmd')}</div>
              <div className="text-white/70 light:text-black/70">{t('hero.terminal.whoamiResult')}</div>
              <div className="pt-2 text-emerald-400">{t('hero.terminal.catCmd')}</div>
              <pre className="whitespace-pre-wrap text-white/70 light:text-black/70">
{`{
  "location": "Tashkent, UZ",
  "frontend": ["React", "TypeScript", "Tailwind CSS"],
  "state": ["Zustand", "React Context"],
  "motion": ["Framer Motion", "Swiper.js"],
  "backend": ["Node.js", "Express.js"],
  "ai": ["Claude API", "Telegram Bots"],
  "status": "available_for_work"
}`}
              </pre>
              <div className="flex items-center gap-1 pt-1">
                <span className="text-emerald-400">$</span>
                <span className="typing-cursor h-4" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
