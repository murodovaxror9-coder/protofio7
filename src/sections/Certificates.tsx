import { useState } from 'react'
import { CertificateBadge } from '../components/CertificateBadge'
import { CertificateCard } from '../components/CertificateCard'
import { CertificateLightbox } from '../components/CertificateLightbox'
import { SectionHeading } from '../components/ui/SectionHeading'
import { certificates } from '../data/certificates'
import { useT } from '../hooks/useT'

export function Certificates() {
  const t = useT()
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const featured = certificates.filter((c) => c.featured)
  const others = certificates.filter((c) => !c.featured)

  const openById = (id: string) => {
    const index = certificates.findIndex((c) => c.id === id)
    if (index !== -1) setActiveIndex(index)
  }

  return (
    <section id="certificates" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="04 / Certificates" title={t('certificates.title')} />

        <div className="grid gap-6 sm:grid-cols-2">
          {featured.map((certificate, idx) => (
            <CertificateCard
              key={certificate.id}
              certificate={certificate}
              index={idx}
              onOpen={() => openById(certificate.id)}
            />
          ))}
        </div>

        {others.length > 0 && (
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {others.map((certificate, idx) => (
              <CertificateBadge
                key={certificate.id}
                certificate={certificate}
                index={idx}
                onOpen={() => openById(certificate.id)}
              />
            ))}
          </div>
        )}
      </div>

      <CertificateLightbox
        certificates={certificates}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />
    </section>
  )
}
