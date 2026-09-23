import { motion } from 'framer-motion'
import { Award } from 'lucide-react'
import type { Certificate } from '../data/certificates'
import { useLanguage } from '../hooks/useLanguage'
import { formatCertificateDate } from '../utils/formatDate'

interface CertificateBadgeProps {
  certificate: Certificate
  index: number
  onOpen: () => void
}

export function CertificateBadge({ certificate, index, onOpen }: CertificateBadgeProps) {
  const { lang } = useLanguage()

  return (
    <motion.button
      type="button"
      onClick={onOpen}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="glass-card flex w-full items-center gap-4 rounded-2xl px-5 py-4 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-400/40"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-400/20 text-cyan-300">
        <Award size={18} />
      </span>
      <div className="min-w-0">
        <div className="truncate text-sm font-semibold">{certificate.title}</div>
        <div className="mt-0.5 flex flex-wrap items-center gap-x-2 text-xs text-white/50 light:text-black/50">
          <span>{certificate.issuer}</span>
          <span>·</span>
          <span>{formatCertificateDate(certificate.date, lang)}</span>
          {certificate.stats && (
            <>
              <span>·</span>
              <span className="font-mono font-medium text-cyan-300">
                {certificate.stats.speed} · {certificate.stats.accuracy}
              </span>
            </>
          )}
        </div>
      </div>
    </motion.button>
  )
}
