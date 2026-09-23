export interface TechGroup {
  id: string
  titleKey: string
  items: string[]
}

export const techStack: TechGroup[] = [
  {
    id: 'frontend',
    titleKey: 'tech.groups.frontend',
    items: [
      'React',
      'TypeScript',
      'JavaScript (ES6+)',
      'Vite',
      'Tailwind CSS',
      'DaisyUI',
      'HTML5 / CSS3',
      'React Router v6',
      'Zustand',
      'React Context',
      'Framer Motion',
      'Swiper.js',
    ],
  },
  {
    id: 'data',
    titleKey: 'tech.groups.data',
    items: ['REST API', 'Axios', 'Fetch API', 'JWT Auth'],
  },
  {
    id: 'backend',
    titleKey: 'tech.groups.backend',
    items: ['Node.js', 'Express.js'],
  },
  {
    id: 'tools',
    titleKey: 'tech.groups.tools',
    items: ['Git / GitHub', 'Vercel', 'Firebase Hosting', 'Figma → React'],
  },
  {
    id: 'ai',
    titleKey: 'tech.groups.ai',
    items: ['Claude API', 'Telegram Bots (Node.js)'],
  },
]
