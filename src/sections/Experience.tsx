import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import { SectionHeading } from '../components/ui/SectionHeading'
import { GlassCard } from '../components/ui/GlassCard'
import { experience } from '../data/experience'
import { useT } from '../hooks/useT'

export function Experience() {
  const t = useT()

  return (
    <section id="experience" className="relative py-24">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <SectionHeading eyebrow="03 / Experience" title={t('experience.title')} />

        <div className="relative space-y-8 border-l border-white/10 pl-8 sm:pl-10">
          {experience.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative"
            >
              <span className="absolute -left-[41px] top-1 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 text-white sm:-left-[49px]">
                <Briefcase size={14} />
              </span>
              <GlassCard hover>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-semibold">{t(item.titleKey)}</h3>
                  <span className="font-mono text-xs text-white/40 light:text-black/40">{item.period}</span>
                </div>
                <div className="mt-1 text-sm font-medium text-cyan-400">{item.place}</div>
                <p className="mt-3 text-sm leading-relaxed text-white/60 light:text-black/60">
                  {t(item.descriptionKey)}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
