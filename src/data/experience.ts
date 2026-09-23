export interface ExperienceItem {
  id: string
  titleKey: string
  place: string
  period: string
  descriptionKey: string
}

// TODO: sanalarni (period) aniq oy/yil bilan to'ldiring
export const experience: ExperienceItem[] = [
  {
    id: 'mars-it',
    titleKey: 'experience.marsIt.title',
    place: 'Mars IT School',
    period: 'TODO: boshlanish — hozirgacha', // TODO: aniq sana
    descriptionKey: 'experience.marsIt.description',
  },
  {
    id: 'freelance',
    titleKey: 'experience.freelance.title',
    place: 'Freelance',
    period: 'TODO: boshlanish — hozirgacha', // TODO: aniq sana
    descriptionKey: 'experience.freelance.description',
  },
]
