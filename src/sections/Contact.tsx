import { motion } from 'framer-motion'
import { Loader2, Mail, MapPin, Phone, Send, MessageCircle } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { GlassCard } from '../components/ui/GlassCard'
import { SectionHeading } from '../components/ui/SectionHeading'
import { profile } from '../data/profile'
import { useT } from '../hooks/useT'

type FormStatus = 'idle' | 'sending' | 'success' | 'error'

export function Contact() {
  const t = useT()
  const [status, setStatus] = useState<FormStatus>('idle')
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const contactCards = [
    { icon: Mail, label: t('contact.emailLabel'), value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: t('contact.phoneLabel'), value: profile.phone, href: `tel:${profile.phone}` },
    {
      icon: MessageCircle,
      label: t('contact.telegramLabel'),
      value: profile.telegram.label,
      href: profile.telegram.url,
    },
    { icon: MapPin, label: t('contact.locationLabel'), value: profile.location, href: undefined },
  ]

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch('/api/send-telegram', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!res.ok) throw new Error('Request failed')

      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="07 / Contact" title={t('contact.title')} />

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-base leading-relaxed text-white/60 light:text-black/60">{t('contact.description')}</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {contactCards.map((card) => {
                const content = (
                  <GlassCard hover className="flex h-full items-center gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-400/20 text-cyan-300">
                      <card.icon size={20} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs uppercase tracking-wide text-white/40 light:text-black/40">
                        {card.label}
                      </div>
                      <div className="truncate text-sm font-medium">{card.value}</div>
                    </div>
                  </GlassCard>
                )
                return card.href ? (
                  <a key={card.label} href={card.href} target="_blank" rel="noopener noreferrer">
                    {content}
                  </a>
                ) : (
                  <div key={card.label}>{content}</div>
                )
              })}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={handleSubmit}
          >
            <GlassCard className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-white/50 light:text-black/50">
                  {t('contact.formName')}
                </label>
                <input
                  id="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition-colors focus:border-violet-400/60"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-white/50 light:text-black/50">
                  {t('contact.formEmail')}
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition-colors focus:border-violet-400/60"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-xs font-medium text-white/50 light:text-black/50"
                >
                  {t('contact.formMessage')}
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition-colors focus:border-violet-400/60"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition-all hover:brightness-110 disabled:opacity-60"
              >
                {status === 'sending' ? (
                  <>
                    <Loader2 size={16} className="animate-spin" /> {t('contact.formSending')}
                  </>
                ) : (
                  <>
                    <Send size={16} /> {t('contact.formSubmit')}
                  </>
                )}
              </button>

              {status === 'success' && (
                <p className="text-center text-sm font-medium text-emerald-400">{t('contact.formSuccess')}</p>
              )}
              {status === 'error' && (
                <p className="text-center text-sm font-medium text-red-400">{t('contact.formError')}</p>
              )}
            </GlassCard>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
