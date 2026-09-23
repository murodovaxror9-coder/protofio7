import { motion } from 'framer-motion'
import { SectionHeading } from '../components/ui/SectionHeading'
import { GlassCard } from '../components/ui/GlassCard'
import { techStack } from '../data/techStack'
import { useT } from '../hooks/useT'

export function TechStack() {
  const t = useT()

  return (
    <section id="tech" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="02 / Stack" title={t('tech.title')} />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {techStack.map((group, idx) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
            >
              <GlassCard hover className="h-full">
                <h3 className="mb-4 font-mono text-sm font-semibold uppercase tracking-wide text-cyan-400">
                  {t(group.titleKey)}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80 light:text-black/80"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
