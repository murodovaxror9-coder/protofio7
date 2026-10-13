import { motion } from 'framer-motion'
import { Loader2, Send } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { GlassCard } from '../components/ui/GlassCard'
import { SectionHeading } from '../components/ui/SectionHeading'
import { useLanguage } from '../hooks/useLanguage'
import { useT } from '../hooks/useT'

type FormStatus = 'idle' | 'sending' | 'success' | 'error'

export function Projects() {
  const t = useT()
  const { dict } = useLanguage()
  const [status, setStatus] = useState<FormStatus>('idle')
  const [form, setForm] = useState({ name: '', phone: '', service: '', location: '', note: '' })
  const serviceOptions = dict.projects.serviceOptions as unknown as string[]

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch('/api/send-telegram', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'usta-lead',
          name: form.name.trim(),
          phone: form.phone.trim(),
          service: form.service.trim(),
          location: form.location.trim(),
          note: form.note.trim(),
        }),
      })

      if (!res.ok) throw new Error('Request failed')

      setStatus('success')
      setForm({ name: '', phone: '', service: '', location: '', note: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeading eyebrow="05 / Usta" title={t('projects.title')} />
        <p className="mb-8 text-center text-sm leading-relaxed text-white/60 light:text-black/60">
          {t('projects.intro')}
        </p>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
        >
          <GlassCard className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="usta-name" className="mb-1.5 block text-xs font-medium text-white/50 light:text-black/50">
                  {t('projects.formName')}
                </label>
                <input
                  id="usta-name"
                  required
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition-colors focus:border-blue-400/60"
                />
              </div>

              <div>
                <label htmlFor="usta-phone" className="mb-1.5 block text-xs font-medium text-white/50 light:text-black/50">
                  {t('projects.formPhone')}
                </label>
                <input
                  id="usta-phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition-colors focus:border-blue-400/60"
                />
              </div>
            </div>

            <div>
              <label htmlFor="usta-service" className="mb-1.5 block text-xs font-medium text-white/50 light:text-black/50">
                {t('projects.formService')}
              </label>
              <select
                id="usta-service"
                required
                value={form.service}
                onChange={(e) => setForm((f) => ({ ...f, service: e.target.value }))}
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition-colors focus:border-blue-400/60"
              >
                <option value="" disabled>
                  {t('projects.formServicePlaceholder')}
                </option>
                {serviceOptions.map((option) => (
                  <option key={option} value={option} className="bg-[#0a0a0f]">
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="usta-location" className="mb-1.5 block text-xs font-medium text-white/50 light:text-black/50">
                {t('projects.formLocation')}
              </label>
              <input
                id="usta-location"
                value={form.location}
                onChange={(e) => setForm((f) => ({ ...f, location: e.target.value }))}
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition-colors focus:border-blue-400/60"
              />
            </div>

            <div>
              <label htmlFor="usta-note" className="mb-1.5 block text-xs font-medium text-white/50 light:text-black/50">
                {t('projects.formNote')}
              </label>
              <textarea
                id="usta-note"
                rows={4}
                value={form.note}
                onChange={(e) => setForm((f) => ({ ...f, note: e.target.value }))}
                className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition-colors focus:border-blue-400/60"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:brightness-110 disabled:opacity-60"
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
