import { BookOpen, Globe2, GraduationCap, LayoutDashboard, Scissors, ShoppingBag, Video, type LucideIcon } from 'lucide-react'
import { useState, type CSSProperties } from 'react'
import type { Project } from '../data/projects'
import { useT } from '../hooks/useT'

const artwork: Record<string, { icon: LucideIcon; accent: string; number: string }> = {
  'devlab-lms': { icon: GraduationCap, accent: '#a78bfa', number: '01' },
  'islamic-companion': { icon: BookOpen, accent: '#6ee7b7', number: '02' },
  soch: { icon: Scissors, accent: '#fdba74', number: '03' },
  shopvibe: { icon: ShoppingBag, accent: '#f9a8d4', number: '04' },
  smarthub: { icon: Globe2, accent: '#67e8f9', number: '05' },
  'admin-dashboard': { icon: LayoutDashboard, accent: '#93c5fd', number: '06' },
  'tg-video-bot': { icon: Video, accent: '#c4b5fd', number: '07' },
  'gentlemens-cut': { icon: Scissors, accent: '#fde68a', number: '08' },
}

export function ProjectCover({ project }: { project: Project }) {
  const t = useT()
  const [failedImage, setFailedImage] = useState<string>()
  const art = artwork[project.id] ?? { icon: LayoutDashboard, accent: '#a78bfa', number: '09' }
  const Icon = art.icon
  const showImage = project.image && failedImage !== project.image

  return (
    <figure className="project-cover" style={{ '--cover-accent': art.accent } as CSSProperties}>
      {showImage ? (
        <img
          src={project.image}
          alt={`${project.title} — ${t('projects.screenshot')}`}
          width={960}
          height={600}
          loading="lazy"
          decoding="async"
          onError={() => setFailedImage(project.image)}
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
      ) : (
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
          <div className="project-cover-grid" />
          <span className="project-cover-number">{art.number}</span>
          <div className="project-cover-orbit project-cover-orbit-outer" />
          <div className="project-cover-orbit project-cover-orbit-inner" />
          <div className="project-cover-symbol"><Icon strokeWidth={1.25} /></div>
          <span className="project-cover-tag">{project.tags[0]}</span>
          <span className="project-cover-mark">{project.title}</span>
        </div>
      )}
      <figcaption className="absolute bottom-3 left-3 rounded-full border border-white/15 bg-[#0a0a0f]/80 px-2.5 py-1 text-[10px] font-medium text-white/80 backdrop-blur-sm">
        {t(showImage ? 'projects.screenshot' : 'projects.illustration')}
      </figcaption>
    </figure>
  )
}
