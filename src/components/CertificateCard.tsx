import { motion } from 'framer-motion'
import { Award, Users } from 'lucide-react'
import { useState } from 'react'
import type { Certificate } from '../data/certificates'
import { useLanguage } from '../hooks/useLanguage'
import { useT } from '../hooks/useT'
import { formatCertificateDate } from '../utils/formatDate'
import { GlassCard } from './ui/GlassCard'

interface CertificateCardProps {
  certificate: Certificate
  index: number
  onOpen: () => void
}

export function CertificateCard({ certificate, index, onOpen }: CertificateCardProps) {
  const t = useT()
  const { lang } = useLanguage()
  const [imgError, setImgError] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: (index % 2) * 0.08 }}
    >
      <GlassCard hover className="flex h-full flex-col overflow-hidden !p-0">
        <button
          type="button"
          onClick={onOpen}
          className="relative block aspect-[4/3] w-full overflow-hidden bg-white/5 text-left"
        >
          {!imgError ? (
            <img
              src={certificate.thumbnail}
              width={800}
              height={600}
              loading="lazy"
              alt={certificate.title}
              onError={() => setImgError(true)}
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-violet-500/20 to-cyan-400/20 px-4 text-center">
              <Award size={28} className="text-cyan-300" />
              <span className="text-xs font-medium text-white/60 light:text-black/60">{certificate.title}</span>
            </div>
          )}
          <span className="absolute right-3 top-3 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
            {t(`certificates.types.${certificate.type}`)}
          </span>
        </button>

        <div className="flex flex-1 flex-col gap-3 p-6">
          <div>
            <h3 className="text-lg font-semibold">{certificate.title}</h3>
            <p className="mt-1 text-sm text-white/50 light:text-black/50">
              {certificate.issuer} · {formatCertificateDate(certificate.date, lang)}
            </p>
          </div>

          {certificate.descriptionKey && (
            <p className="text-sm leading-relaxed text-white/60 light:text-black/60">
              {t(certificate.descriptionKey)}
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

          <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-white/10 pt-4 text-xs text-white/50 light:text-black/50">
            {certificate.team && (
              <span className="inline-flex items-center gap-1.5">
                <Users size={13} /> {certificate.team}
              </span>
            )}
            {certificate.credentialId && <span className="font-mono">{certificate.credentialId}</span>}
            {certificate.verifyUrl && (
              <a
                href={certificate.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="ml-auto font-semibold text-cyan-300 hover:text-cyan-200"
              >
                {t('certificates.verifyButton')}
              </a>
            )}
          </div>
        </div>
      </GlassCard>
    </motion.div>
  )
}
