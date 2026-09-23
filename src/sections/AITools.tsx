import { motion } from 'framer-motion'
import { Bot, MessageSquare, Sparkles, Terminal } from 'lucide-react'
import type { ComponentType } from 'react'
import { GlassCard } from '../components/ui/GlassCard'
import { SectionHeading } from '../components/ui/SectionHeading'
import { aiTools } from '../data/aiTools'
import { useT } from '../hooks/useT'

const icons: Record<string, ComponentType<{ size?: number }>> = {
  claude: Sparkles,
  chatgpt: MessageSquare,
  cursor: Terminal,
  copilot: Bot,
}

export function AITools() {
  const t = useT()

  return (
    <section id="ai-tools" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="06 / AI" title={t('aiTools.title')} />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {aiTools.map((tool, idx) => {
            const Icon = icons[tool.id] ?? Sparkles
            return (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                <GlassCard hover className="h-full text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-400/20 text-cyan-300">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-4 text-sm font-semibold">{tool.name}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-white/60 light:text-black/60">
                    {t(tool.descriptionKey)}
                  </p>
                </GlassCard>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
