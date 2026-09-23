import { motion } from 'framer-motion'
import { ExternalLink, Info } from 'lucide-react'
import { GlassCard } from './ui/GlassCard'
import { GithubIcon } from './ui/BrandIcons'
import type { Project } from '../data/projects'
import { useT } from '../hooks/useT'

interface ProjectCardProps {
  project: Project
  index: number
  onOpenDetails: (project: Project) => void
}

export function ProjectCard({ project, index, onOpenDetails }: ProjectCardProps) {
  const t = useT()

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
    >
      <GlassCard hover className="flex h-full flex-col">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-emerald-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Live
          </span>
        </div>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-white/60 light:text-black/60">
          {t(project.descriptionKey)}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-white/5 px-2.5 py-1 text-[11px] font-medium text-white/70 light:text-black/70"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-3 border-t border-white/10 pt-4">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-300 hover:text-cyan-200"
          >
            <ExternalLink size={14} /> {t('projects.liveButton')}
          </a>
          <a
            href={project.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/70 hover:text-white light:text-black/70 light:hover:text-black"
          >
            <GithubIcon size={14} /> {t('projects.codeButton')}
          </a>
          <button
            type="button"
            onClick={() => onOpenDetails(project)}
            className="ml-auto inline-flex items-center gap-1.5 text-xs font-semibold text-violet-300 hover:text-violet-200"
          >
            <Info size={14} /> {t('projects.detailsButton')}
          </button>
        </div>
      </GlassCard>
    </motion.div>
  )
}
