import { motion } from 'framer-motion'
import { ArrowUpRight, ExternalLink, FileText, Info } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ProjectCover } from './ProjectCover'
import { GlassCard } from './ui/GlassCard'
import { GithubIcon } from './ui/BrandIcons'
import type { Project } from '../data/projects'
import { useT } from '../hooks/useT'
import { isProjectUrlAvailable } from '../utils/projectUrl'

interface ProjectCardProps {
  project: Project
  index: number
  onOpenDetails: (project: Project) => void
}

export function ProjectCard({ project, index, onOpenDetails }: ProjectCardProps) {
  const t = useT()
  const hasLive = isProjectUrlAvailable(project.liveUrl)
  const hasCode = isProjectUrlAvailable(project.codeUrl)

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
    >
      <GlassCard hover className="group flex h-full flex-col">
        <button
          type="button"
          onClick={() => onOpenDetails(project)}
          aria-label={`${t('projects.openProject')}: ${project.title}`}
          className="relative mb-5 block w-full cursor-pointer rounded-xl text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400"
        >
          <ProjectCover project={project} />
          <span aria-hidden="true" className="absolute right-3 bottom-3 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white transition-transform group-hover:rotate-45">
            <ArrowUpRight size={16} />
          </span>
        </button>
        {project.featured && <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-violet-300 light:text-violet-700">{t('projects.featured')}</p>}
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold">{project.title}</h3>
          {hasLive && <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-emerald-300 light:text-emerald-700">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Live
          </span>}
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
          {hasLive && <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-300 hover:text-cyan-200"
          >
            <ExternalLink size={14} /> {t('projects.liveButton')}
          </a>}
          {hasCode && <a
            href={project.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/70 hover:text-white light:text-black/70 light:hover:text-black"
          >
            <GithubIcon size={14} /> {t('projects.codeButton')}
          </a>}
          <button
            type="button"
            onClick={() => onOpenDetails(project)}
            className="ml-auto inline-flex items-center gap-1.5 rounded-sm text-xs font-semibold text-violet-300 hover:text-violet-200 light:text-violet-700 light:hover:text-violet-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400"
          >
            <Info size={14} /> {t('projects.detailsButton')}
          </button>
        </div>

        {project.featured && (
          <Link
            to={`/projects/${project.id}`}
            className="mt-3 inline-flex items-center justify-center gap-1.5 rounded-lg border border-cyan-400/20 bg-cyan-400/5 px-3 py-2 text-xs font-semibold text-cyan-300 transition-colors hover:bg-cyan-400/10 light:text-cyan-700"
          >
            <FileText size={14} /> {t('projects.caseStudyButton')}
          </Link>
        )}
      </GlassCard>
    </motion.div>
  )
}
