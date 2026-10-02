import { ArrowUpRight, Check, ExternalLink, FileText } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ProjectCard } from '../components/ProjectCard'
import { ProjectCover } from '../components/ProjectCover'
import { GithubIcon } from '../components/ui/BrandIcons'
import { Modal } from '../components/ui/Modal'
import { SectionHeading } from '../components/ui/SectionHeading'
import { projects, type Project } from '../data/projects'
import { projectStories } from '../data/projectStories'
import { useLanguage } from '../hooks/useLanguage'
import { useT } from '../hooks/useT'
import { isProjectUrlAvailable } from '../utils/projectUrl'

export function Projects() {
  const t = useT()
  const { lang } = useLanguage()
  const [activeProject, setActiveProject] = useState<Project | null>(null)
  const story = activeProject ? projectStories[activeProject.id] : undefined
  const hasLive = activeProject ? isProjectUrlAvailable(activeProject.liveUrl) : false
  const hasCode = activeProject ? isProjectUrlAvailable(activeProject.codeUrl) : false

  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="05 / Work" title={t('projects.title')} />

        <div className="mb-8 flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="max-w-xl text-sm leading-relaxed text-white/60 light:text-black/60">{t('projects.intro')}</p>
          <a href="#testimonials" className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-cyan-300 light:text-cyan-700">
            {t('projects.feedbackLink')} <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} onOpenDetails={setActiveProject} />
          ))}
        </div>
      </div>

      <Modal isOpen={activeProject !== null} onClose={() => setActiveProject(null)} titleId="project-title" closeLabel={t('projects.closeButton')}>
        {activeProject && (
          <div>
            <h3 id="project-title" className="mb-5 pr-10 text-2xl font-bold">{activeProject.title}</h3>
            <ProjectCover key={activeProject.id} project={activeProject} />
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
            {story && (
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 light:border-black/10 light:bg-black/[0.02]">
                  <h4 className="text-sm font-semibold text-cyan-300 light:text-cyan-700">{t('projects.problem')}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-white/70 light:text-black/70">{story.problem[lang]}</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 light:border-black/10 light:bg-black/[0.02]">
                  <h4 className="text-sm font-semibold text-cyan-300 light:text-cyan-700">{t('projects.highlights')}</h4>
                  <ul className="mt-3 space-y-3">
                    {story.highlights.map((item, index) => (
                      <li key={index} className="flex gap-2 text-sm leading-relaxed text-white/70 light:text-black/70">
                        <Check size={15} aria-hidden="true" className="mt-1 shrink-0 text-cyan-400 light:text-cyan-700" />{item[lang]}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
            <div className="mt-5 rounded-xl border border-violet-400/20 bg-violet-400/5 p-4">
              <h4 className="text-sm font-semibold text-violet-300 light:text-violet-700">{t('projects.contribution')}</h4>
              {activeProject.contributions?.length ? (
                <ul className="mt-3 list-disc space-y-2 pl-4 text-sm leading-relaxed text-white/70 light:text-black/70">
                  {activeProject.contributions.map((item, index) => <li key={index}>{item[lang]}</li>)}
                </ul>
              ) : (
                <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm">
                  <p className="text-white/60 light:text-black/60">{t('projects.contributionPending')}</p>
                  <a href="#contact" onClick={() => setActiveProject(null)} className="inline-flex items-center gap-1 font-medium text-violet-300 light:text-violet-700">
                    {t('projects.askContribution')} <ArrowUpRight size={14} />
                  </a>
                </div>
              )}
            </div>
            <div className="mt-6 flex flex-wrap gap-3 border-t border-white/10 pt-5">
              {hasLive && <a
                href={activeProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-5 py-2.5 text-sm font-semibold text-white"
              >
                <ExternalLink size={15} /> {t('projects.liveButton')}
              </a>}
              {hasCode && <a
                href={activeProject.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold hover:bg-white/5"
              >
                <GithubIcon size={15} /> {t('projects.codeButton')}
              </a>}
              {!hasLive && !hasCode && <p className="text-xs text-white/50 light:text-black/60">{t('projects.linksPending')}</p>}
              {activeProject.featured && (
                <Link
                  to={`/projects/${activeProject.id}`}
                  onClick={() => setActiveProject(null)}
                  className="ml-auto inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/5 px-5 py-2.5 text-sm font-semibold text-cyan-300 hover:bg-cyan-400/10 light:text-cyan-700"
                >
                  <FileText size={15} /> {t('projects.caseStudyButton')}
                </Link>
              )}
            </div>
          </div>
        )}
      </Modal>
    </section>
  )
}
