import { motion } from 'framer-motion'
import { ExternalLink, Loader2, Send, Shirt } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { GlassCard } from '../components/ui/GlassCard'
import { SectionHeading } from '../components/ui/SectionHeading'
import { useLanguage } from '../hooks/useLanguage'
import { useT } from '../hooks/useT'

type FormStatus = 'idle' | 'sending' | 'success' | 'error'

const FORMO_URL = 'https://formo.uz/'

export function Projects() {
  const t = useT()
  const { dict } = useLanguage()
  const [status, setStatus] = useState<FormStatus>('idle')
  const [form, setForm] = useState({ name: '', phone: '', size: '', note: '' })
  const sizeOptions = dict.projects.sizeOptions as unknown as string[]

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch('/api/send-telegram', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'formo-order',
          name: form.name.trim(),
          phone: form.phone.trim(),
          size: form.size.trim(),
          note: form.note.trim(),
        }),
      })

      if (!res.ok) throw new Error('Request failed')

      setStatus('success')
      setForm({ name: '', phone: '', size: '', note: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeading eyebrow="05 / Loyiha" title={t('projects.title')} />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <GlassCard className="mb-8 flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-400/20 text-cyan-300">
              <Shirt size={26} />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold">{t('projects.title')}</h3>
              <p className="mt-1 text-sm leading-relaxed text-white/60 light:text-black/60">{t('projects.intro')}</p>
            </div>
            <a
              href={FORMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold transition-all hover:border-blue-400/60 hover:bg-white/5"
            >
              {t('projects.visitSite')} <ExternalLink size={15} />
            </a>
          </GlassCard>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={handleSubmit}
        >
          <GlassCard className="space-y-5">
            <h4 className="text-sm font-semibold text-cyan-300 light:text-cyan-700">{t('projects.orderFormTitle')}</h4>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="formo-name" className="mb-1.5 block text-xs font-medium text-white/50 light:text-black/60">
                  {t('projects.formName')}
                </label>
                <input
                  id="formo-name"
                  required
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition-colors focus:border-blue-400/60"
                />
              </div>

              <div>
                <label htmlFor="formo-phone" className="mb-1.5 block text-xs font-medium text-white/50 light:text-black/60">
                  {t('projects.formPhone')}
                </label>
                <input
                  id="formo-phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition-colors focus:border-blue-400/60"
                />
              </div>
            </div>

            <div>
              <label htmlFor="formo-size" className="mb-1.5 block text-xs font-medium text-white/50 light:text-black/60">
                {t('projects.formSize')}
              </label>
              <select
                id="formo-size"
                required
                value={form.size}
                onChange={(e) => setForm((f) => ({ ...f, size: e.target.value }))}
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition-colors focus:border-blue-400/60"
              >
                <option value="" disabled className="bg-[#0a0a0f] text-white light:bg-white light:text-black">
                  {t('projects.formSizePlaceholder')}
                </option>
                {sizeOptions.map((option) => (
                  <option key={option} value={option} className="bg-[#0a0a0f] text-white light:bg-white light:text-black">
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="formo-note" className="mb-1.5 block text-xs font-medium text-white/50 light:text-black/60">
                {t('projects.formNote')}
              </label>
              <textarea
                id="formo-note"
                rows={4}
                value={form.note}
                onChange={(e) => setForm((f) => ({ ...f, note: e.target.value }))}
                className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition-colors focus:border-blue-400/60"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-[#0a0a0f] shadow-lg shadow-blue-500/25 transition-all hover:brightness-110 disabled:opacity-60"
            >
              {status === 'sending' ? (
                <>
                  <Loader2 size={16} className="animate-spin" /> {t('projects.formSending')}
                </>
              ) : (
                <>
                  <Send size={16} /> {t('projects.formSubmit')}
                </>
              )}
            </button>

            {status === 'success' && (
              <p className="text-center text-sm font-medium text-emerald-400">{t('projects.formSuccess')}</p>
            )}
            {status === 'error' && (
              <p className="text-center text-sm font-medium text-red-400">{t('projects.formError')}</p>
            )}
          </GlassCard>
        </motion.form>
      </div>
    </section>
  )
}
