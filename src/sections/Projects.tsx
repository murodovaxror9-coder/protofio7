import { ExternalLink } from 'lucide-react'
import { useState } from 'react'
import { ProjectCard } from '../components/ProjectCard'
import { GithubIcon } from '../components/ui/BrandIcons'
import { Modal } from '../components/ui/Modal'
import { SectionHeading } from '../components/ui/SectionHeading'
import { projects, type Project } from '../data/projects'
import { useT } from '../hooks/useT'

export function Projects() {
  const t = useT()
  const [activeProject, setActiveProject] = useState<Project | null>(null)

  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="05 / Work" title={t('projects.title')} />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} onOpenDetails={setActiveProject} />
          ))}
        </div>
      </div>

      <Modal isOpen={activeProject !== null} onClose={() => setActiveProject(null)}>
        {activeProject && (
          <div>
            <h3 className="pr-8 text-xl font-bold">{activeProject.title}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {activeProject.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-white/5 px-2.5 py-1 text-[11px] font-medium text-white/70 light:text-black/70"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/70 light:text-black/70">
              {t(activeProject.detailsKey)}
            </p>
            <div className="mt-6 flex flex-wrap gap-3 border-t border-white/10 pt-5">
              <a
                href={activeProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-5 py-2.5 text-sm font-semibold text-white"
              >
                <ExternalLink size={15} /> {t('projects.liveButton')}
              </a>
              <a
                href={activeProject.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold hover:bg-white/5"
              >
                <GithubIcon size={15} /> {t('projects.codeButton')}
              </a>
            </div>
          </div>
        )}
      </Modal>
    </section>
  )
}
