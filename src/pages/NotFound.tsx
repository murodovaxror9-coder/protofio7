import { motion } from 'framer-motion'
import { ArrowLeft, Compass } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useT } from '../hooks/useT'

export function NotFound() {
  const t = useT()

  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden py-24">
      <div className="bg-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />
      <div className="glow-orb -left-24 top-10 h-72 w-72 bg-violet-500" />
      <div className="glow-orb right-0 top-40 h-72 w-72 bg-cyan-400" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto flex max-w-xl flex-col items-center gap-5 px-5 text-center sm:px-8"
      >
        <span className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-cyan-300">
          <Compass size={28} aria-hidden="true" />
        </span>
        <h1 className="text-5xl font-bold">
          4<span className="gradient-text">0</span>4
        </h1>
        <h2 className="text-xl font-semibold">{t('notFound.title')}</h2>
        <p className="text-sm leading-relaxed text-white/60 light:text-black/60">{t('notFound.description')}</p>
        <Link
          to="/"
          className="mt-3 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition-all hover:brightness-110"
        >
          <ArrowLeft size={16} /> {t('notFound.backHome')}
        </Link>
      </motion.div>
    </section>
  )
}

export default NotFound
