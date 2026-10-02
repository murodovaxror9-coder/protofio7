export interface Stat {
  id: string
  value: number
  suffix: string
  labelKey: string
}

// TODO: sonlarni real holatga moslang (loyihalar, texnologiyalar va h.k.)
export const stats: Stat[] = [
  { id: 'projects', value: 8, suffix: '+', labelKey: 'hero.stats.projects' },
  { id: 'stack', value: 15, suffix: '+', labelKey: 'hero.stats.stack' },
  { id: 'coffee', value: 100, suffix: '+', labelKey: 'hero.stats.coffee' },
]
