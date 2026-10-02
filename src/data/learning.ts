export interface LearningItem {
  id: string
  label: string
}

// TODO: haqiqatda hozir o'rganayotgan texnologiyalaringizga moslang.
export const learningItems: LearningItem[] = [
  { id: 'typescript', label: 'TypeScript' },
  { id: 'nextjs', label: 'Next.js' },
  { id: 'nodejs', label: 'Node.js' },
  { id: 'backend-architecture', label: 'Backend Architecture' },
]
