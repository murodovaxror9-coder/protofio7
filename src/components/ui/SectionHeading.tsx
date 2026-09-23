import { motion } from 'framer-motion'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  align?: 'left' | 'center'
}

export function SectionHeading({ eyebrow, title, align = 'center' }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`mb-12 flex flex-col gap-3 ${align === 'center' ? 'items-center text-center' : 'items-start text-left'}`}
    >
      <span className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-400">{eyebrow}</span>
      <h2 className="text-3xl font-bold sm:text-4xl">
        {title.split(' ').map((word, i) => (
          <span key={i} className={i === title.split(' ').length - 1 ? 'gradient-text' : ''}>
            {word}{' '}
          </span>
        ))}
      </h2>
    </motion.div>
  )
}
