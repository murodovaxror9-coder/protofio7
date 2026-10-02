export interface ExperienceItem {
  id: string
  titleKey: string
  place: string
  periodKey: string
  descriptionKey: string
}

// TODO: periodKey matnlarini (translations.ts) aniq oy/yil bilan to'ldiring
export const experience: ExperienceItem[] = [
  {
    id: 'mars-it',
    titleKey: 'experience.marsIt.title',
    place: 'Mars IT School',
    periodKey: 'experience.marsIt.period',
    descriptionKey: 'experience.marsIt.description',
  },
  {
    id: 'freelance',
    titleKey: 'experience.freelance.title',
    place: 'Freelance',
    periodKey: 'experience.freelance.period',
    descriptionKey: 'experience.freelance.description',
  },
]
