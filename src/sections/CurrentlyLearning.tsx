import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { GlassCard } from '../components/ui/GlassCard'
import { SectionHeading } from '../components/ui/SectionHeading'
import { learningItems } from '../data/learning'
import { useT } from '../hooks/useT'

export function CurrentlyLearning() {
  const t = useT()

  return (
    <section id="learning" className="relative py-24">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <SectionHeading eyebrow={t('learning.eyebrow')} title={t('learning.title')} />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <GlassCard className="flex flex-wrap justify-center gap-3">
            {learningItems.map((item) => (
              <span
                key={item.id}
                className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm font-medium text-cyan-200 light:text-cyan-800"
              >
                <Sparkles size={14} aria-hidden="true" className="text-cyan-400" />
                {item.label}
              </span>
            ))}
          </GlassCard>
        </motion.div>
      </div>
    </section>
  )
}
