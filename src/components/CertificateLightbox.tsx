import { AnimatePresence, motion } from 'framer-motion'
import { Award, ChevronLeft, ChevronRight, ExternalLink, Users, X } from 'lucide-react'
import { useEffect, useRef, useState, type TouchEvent } from 'react'
import { createPortal } from 'react-dom'
import type { Certificate } from '../data/certificates'
import { useLanguage } from '../hooks/useLanguage'
import { useT } from '../hooks/useT'
import { formatCertificateDate } from '../utils/formatDate'

interface CertificateLightboxProps {
  certificates: Certificate[]
  activeIndex: number | null
  onClose: () => void
  onNavigate: (index: number) => void
}

function LightboxImage({ src, alt }: { src: string; alt: string }) {
  const [error, setError] = useState(false)

  if (error) {
    return (
      <div className="flex h-64 w-full items-center justify-center bg-gradient-to-br from-violet-500/20 to-cyan-400/20 text-cyan-200">
        <Award size={40} />
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      width={1200}
      height={900}
      onError={() => setError(true)}
      className="h-full max-h-[55vh] w-full object-contain"
    />
  )
}

export function CertificateLightbox({ certificates, activeIndex, onClose, onNavigate }: CertificateLightboxProps) {
  const t = useT()
  const { lang } = useLanguage()
  const touchStartX = useRef<number | null>(null)
  const isOpen = activeIndex !== null
  const certificate = activeIndex !== null ? certificates[activeIndex] : null
  const currentPosition = activeIndex !== null ? activeIndex + 1 : 0

  const goPrev = () => {
    if (activeIndex === null) return
    onNavigate((activeIndex - 1 + certificates.length) % certificates.length)
  }
  const goNext = () => {
    if (activeIndex === null) return
    onNavigate((activeIndex + 1) % certificates.length)
  }

  useEffect(() => {
    if (!isOpen) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') goPrev()
      if (e.key === 'ArrowRight') goNext()
    }

    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, activeIndex])

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return
    const delta = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(delta) > 50) {
      if (delta > 0) goPrev()
      else goNext()
    }
    touchStartX.current = null
  }

  return createPortal(
    <AnimatePresence>
      {isOpen && certificate && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          onClick={onClose}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <button
            type="button"
            onClick={onClose}
            aria-label={t('certificates.closeButton')}
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-violet-400/50 hover:bg-white/10"
          >
            <X size={18} />
          </button>

          {certificates.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  goPrev()
                }}
                aria-label="Previous"
                className="absolute left-3 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-violet-400/50 hover:bg-white/10 sm:flex"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  goNext()
                }}
                aria-label="Next"
                className="absolute right-3 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-violet-400/50 hover:bg-white/10 sm:flex"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}

          <motion.div
            key={certificate.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="glass-card flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-[#12121a] light:bg-white"
          >
            <div className="flex-1 overflow-hidden bg-black/40">
              <LightboxImage src={certificate.image} alt={certificate.title} />
            </div>

            <div className="space-y-3 overflow-y-auto p-6">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-xl font-bold">{certificate.title}</h3>
                  <p className="mt-1 text-sm text-white/50 light:text-black/50">
                    {certificate.issuer} · {formatCertificateDate(certificate.date, lang)}
                  </p>
                </div>
                <span className="rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-violet-200 light:border-violet-400/50 light:text-violet-700">
                  {t(`certificates.types.${certificate.type}`)}
                </span>
              </div>

              {certificate.descriptionKey && (
                <p className="text-sm leading-relaxed text-white/70 light:text-black/70">
                  {t(certificate.descriptionKey)}
                </p>
              )}

              {certificate.partners && certificate.partners.length > 0 && (
                <p className="text-xs leading-relaxed text-white/50 light:text-black/50">
                  <span className="font-semibold text-white/70 light:text-black/70">
                    {t('certificates.partnersLabel')}:
                  </span>{' '}
                  {certificate.partners.join(', ')}
                </p>
              )}

              {certificate.skills && certificate.skills.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {certificate.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md bg-white/5 px-2.5 py-1 text-[11px] font-medium text-white/70 light:text-black/70"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}

              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/10 pt-4 text-xs text-white/50 light:text-black/50">
                {certificate.team && (
                  <span className="inline-flex items-center gap-1.5">
                    <Users size={13} /> {certificate.team}
                  </span>
                )}
                {certificate.credentialId && (
                  <span className="font-mono">
                    {t('certificates.credentialLabel')}: {certificate.credentialId}
                  </span>
                )}
                {certificate.stats && (
                  <span className="font-mono font-medium text-cyan-300">
                    {certificate.stats.speed} · {certificate.stats.accuracy}
                  </span>
                )}
                {certificate.verifyUrl && (
                  <a
                    href={certificate.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto inline-flex items-center gap-1.5 font-semibold text-cyan-300 hover:text-cyan-200"
                  >
                    <ExternalLink size={13} /> {t('certificates.verifyButton')}
                  </a>
                )}
              </div>

              {certificates.length > 1 && (
                <div className="pt-1 text-center font-mono text-[11px] text-white/30 light:text-black/30">
                  {currentPosition} / {certificates.length}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  )
}
