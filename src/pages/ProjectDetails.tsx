import { motion } from 'framer-motion'
import { ArrowLeft, ArrowUpRight, Check, ExternalLink } from 'lucide-react'
import { useParams } from 'react-router-dom'
import { ProjectCover } from '../components/ProjectCover'
import { GithubIcon } from '../components/ui/BrandIcons'
import { GlassCard } from '../components/ui/GlassCard'
import { projects } from '../data/projects'
import { projectStories } from '../data/projectStories'
import { useLanguage } from '../hooks/useLanguage'
import { useT } from '../hooks/useT'
import { isProjectUrlAvailable } from '../utils/projectUrl'
import { NotFound } from './NotFound'

export function ProjectDetails() {
  const t = useT()
  const { lang } = useLanguage()
  const { id } = useParams<{ id: string }>()
  const project = projects.find((p) => p.id === id && p.featured)

  if (!project) return <NotFound />

  const story = projectStories[project.id]
  const hasLive = isProjectUrlAvailable(project.liveUrl)
  const hasCode = isProjectUrlAvailable(project.codeUrl)

  return (
    <article className="relative py-28">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <a
          href="/#projects"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-white/60 transition-colors hover:text-white light:text-black/60 light:hover:text-black"
        >
          <ArrowLeft size={15} /> {t('projects.backToProjects')}
        </a>

        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mt-6">
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-3xl font-bold sm:text-4xl">{project.title}</h1>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-emerald-300 light:text-emerald-700">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              {t(hasLive ? 'projects.statusLive' : 'projects.statusCompleted')}
            </span>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="rounded-md bg-white/5 px-2.5 py-1 text-[11px] font-medium text-white/70 light:text-black/70">
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-6">
            <ProjectCover project={project} />
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {hasLive && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-5 py-2.5 text-sm font-semibold text-white"
              >
                <ExternalLink size={15} /> {t('projects.liveButton')}
              </a>
            )}
            {hasCode && (
              <a
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold hover:bg-white/5"
              >
                <GithubIcon size={15} /> {t('projects.codeButton')}
              </a>
            )}
            {!hasLive && !hasCode && <p className="text-xs text-white/50 light:text-black/60">{t('projects.linksPending')}</p>}
          </div>

          <section className="mt-10">
            <h2 className="text-lg font-semibold text-cyan-300 light:text-cyan-700">{t('projects.overview')}</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/70 light:text-black/70">{t(project.detailsKey)}</p>
          </section>

          {story && (
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <GlassCard>
                <h2 className="text-sm font-semibold text-cyan-300 light:text-cyan-700">{t('projects.problem')}</h2>
                <p className="mt-2 text-sm leading-relaxed text-white/70 light:text-black/70">{story.problem[lang]}</p>
              </GlassCard>
              <GlassCard>
                <h2 className="text-sm font-semibold text-cyan-300 light:text-cyan-700">{t('projects.highlights')}</h2>
                <ul className="mt-3 space-y-3">
                  {story.highlights.map((item, index) => (
                    <li key={index} className="flex gap-2 text-sm leading-relaxed text-white/70 light:text-black/70">
                      <Check size={15} aria-hidden="true" className="mt-1 shrink-0 text-cyan-400 light:text-cyan-700" />
                      {item[lang]}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </div>
          )}

          <section className="mt-8 rounded-xl border border-violet-400/20 bg-violet-400/5 p-5">
            <h2 className="text-sm font-semibold text-violet-300 light:text-violet-700">{t('projects.contribution')}</h2>
            {project.contributions?.length ? (
              <ul className="mt-3 list-disc space-y-2 pl-4 text-sm leading-relaxed text-white/70 light:text-black/70">
                {project.contributions.map((item, index) => (
                  <li key={index}>{item[lang]}</li>
                ))}
              </ul>
            ) : (
              <PendingNote textKey="projects.contributionPending" />
            )}
          </section>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <section className="rounded-xl border border-white/10 bg-white/[0.03] p-5 light:border-black/10 light:bg-black/[0.02]">
              <h2 className="text-sm font-semibold text-cyan-300 light:text-cyan-700">{t('projects.challenges')}</h2>
              {story?.challenges?.length ? (
                <ul className="mt-3 list-disc space-y-2 pl-4 text-sm leading-relaxed text-white/70 light:text-black/70">
                  {story.challenges.map((item, index) => (
                    <li key={index}>{item[lang]}</li>
                  ))}
                </ul>
              ) : (
                <PendingNote textKey="projects.challengesPending" />
              )}
            </section>
            <section className="rounded-xl border border-white/10 bg-white/[0.03] p-5 light:border-black/10 light:bg-black/[0.02]">
              <h2 className="text-sm font-semibold text-cyan-300 light:text-cyan-700">{t('projects.whatILearned')}</h2>
              {story?.whatILearned?.length ? (
                <ul className="mt-3 list-disc space-y-2 pl-4 text-sm leading-relaxed text-white/70 light:text-black/70">
                  {story.whatILearned.map((item, index) => (
                    <li key={index}>{item[lang]}</li>
                  ))}
                </ul>
              ) : (
                <PendingNote textKey="projects.learnedPending" />
              )}
            </section>
          </div>
        </motion.div>
      </div>
    </article>
  )
}

function PendingNote({ textKey }: { textKey: string }) {
  const t = useT()
  return (
    <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm">
      <p className="text-white/60 light:text-black/60">{t(textKey)}</p>
      <a href="/#contact" className="inline-flex items-center gap-1 font-medium text-violet-300 light:text-violet-700">
        {t('projects.askContribution')} <ArrowUpRight size={14} />
      </a>
    </div>
  )
}

export default ProjectDetails
