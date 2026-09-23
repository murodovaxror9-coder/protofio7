import { motion } from 'framer-motion'
import { GraduationCap, Mail, MapPin } from 'lucide-react'
import { GlassCard } from '../components/ui/GlassCard'
import { SectionHeading } from '../components/ui/SectionHeading'
import { profile } from '../data/profile'
import { useT } from '../hooks/useT'

export function About() {
  const t = useT()

  const infoItems = [
    { icon: MapPin, label: t('about.locationLabel'), value: profile.location },
    { icon: GraduationCap, label: t('about.affiliationLabel'), value: profile.affiliation },
    { icon: Mail, label: t('about.emailLabel'), value: profile.email },
  ]

  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="01 / About" title={t('about.title')} />

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="space-y-4 text-base leading-relaxed text-white/70 light:text-black/70"
          >
            <p>{t('about.paragraph1')}</p>
            <p>{t('about.paragraph2')}</p>
            <p>{t('about.paragraph3')}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid gap-4"
          >
            {infoItems.map((item) => (
              <GlassCard key={item.label} className="flex items-center gap-4" hover>
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-400/20 text-cyan-300">
                  <item.icon size={20} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wide text-white/40 light:text-black/40">
                    {item.label}
                  </div>
                  <div className="text-sm font-medium">{item.value}</div>
                </div>
              </GlassCard>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
