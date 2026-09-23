export interface Project {
  id: string
  title: string
  descriptionKey: string
  detailsKey: string
  tags: string[]
  liveUrl: string
  codeUrl: string
  featured?: boolean
}

// TODO: liveUrl / codeUrl manzillarini haqiqiy havolalar bilan almashtiring
export const projects: Project[] = [
  {
    id: 'devlab-lms',
    title: 'DevLab LMS',
    descriptionKey: 'projects.devlabLms.description',
    detailsKey: 'projects.devlabLms.details',
    tags: ['React', 'Vite', 'Express', 'JWT'],
    liveUrl: 'https://TODO-devlab-lms.example.com',
    codeUrl: 'https://github.com/TODO/devlab-lms',
    featured: true,
  },
  {
    id: 'islamic-companion',
    title: 'Islamic Companion',
    descriptionKey: 'projects.islamicCompanion.description',
    detailsKey: 'projects.islamicCompanion.details',
    tags: ['React', 'Tailwind CSS', 'Framer Motion', 'Aladhan API'],
    liveUrl: 'https://TODO-islamic-companion.example.com',
    codeUrl: 'https://github.com/TODO/islamic-companion',
    featured: true,
  },
  {
    id: 'soch',
    title: 'soch.',
    descriptionKey: 'projects.soch.description',
    detailsKey: 'projects.soch.details',
    tags: ['React', 'TypeScript', 'SaaS', 'B2B'],
    liveUrl: 'https://TODO-soch.example.com',
    codeUrl: 'https://github.com/TODO/soch',
    featured: true,
  },
  {
    id: 'shopvibe',
    title: 'ShopVibe',
    descriptionKey: 'projects.shopvibe.description',
    detailsKey: 'projects.shopvibe.details',
    tags: ['React', 'Tailwind CSS', 'Swiper.js'],
    liveUrl: 'https://TODO-shopvibe.example.com',
    codeUrl: 'https://github.com/TODO/shopvibe',
  },
  {
    id: 'smarthub',
    title: 'SmartHub',
    descriptionKey: 'projects.smarthub.description',
    detailsKey: 'projects.smarthub.details',
    tags: ['React', 'Axios', 'REST Countries API'],
    liveUrl: 'https://TODO-smarthub.example.com',
    codeUrl: 'https://github.com/TODO/smarthub',
  },
  {
    id: 'admin-dashboard',
    title: 'Admin Dashboard',
    descriptionKey: 'projects.adminDashboard.description',
    detailsKey: 'projects.adminDashboard.details',
    tags: ['React', 'Nested Routing', 'FakeStore API'],
    liveUrl: 'https://TODO-admin-dashboard.example.com',
    codeUrl: 'https://github.com/TODO/admin-dashboard',
  },
  {
    id: 'tg-video-bot',
    title: 'Telegram Video Downloader Bot',
    descriptionKey: 'projects.tgVideoBot.description',
    detailsKey: 'projects.tgVideoBot.details',
    tags: ['Node.js', 'yt-dlp', 'Telegram Bot API'],
    liveUrl: 'https://TODO-t.me-videobot.example.com',
    codeUrl: 'https://github.com/TODO/tg-video-bot',
  },
  {
    id: 'gentlemens-cut',
    title: "Gentlemen's Cut",
    descriptionKey: 'projects.gentlemensCut.description',
    detailsKey: 'projects.gentlemensCut.details',
    tags: ['HTML5/CSS3', 'JavaScript', 'Landing Page'],
    liveUrl: 'https://TODO-gentlemens-cut.example.com',
    codeUrl: 'https://github.com/TODO/gentlemens-cut',
  },
]
