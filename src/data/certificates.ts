export type CertificateType = 'hackathon' | 'course' | 'skill'

export interface CertificateStats {
  speed: string
  accuracy: string
}

export interface Certificate {
  id: string
  title: string
  issuer: string
  partners?: string[]
  date: string
  descriptionKey?: string
  team?: string
  credentialId?: string
  type: CertificateType
  featured: boolean
  skills?: string[]
  stats?: CertificateStats
  image: string
  thumbnail: string
  verifyUrl?: string
}

const IMAGE_DIR = '/certificates'

export const certificates: Certificate[] = [
  {
    id: 'mars-hackathon-2026',
    title: 'Mars Hackathon — Participant',
    issuer: 'Mars IT School',
    partners: [
      'IT Park Uzbekistan',
      'Ministry of Digital Technologies',
      'Modme',
      'Turin Polytechnic University in Tashkent',
    ],
    date: '2026-08-16',
    descriptionKey: 'certificates.items.marsHackathon.description',
    team: 'Delete Group',
    credentialId: 'MIS-2026-00257',
    type: 'hackathon',
    featured: true,
    skills: ['Teamwork', 'React', 'Problem Solving'],
    image: `${IMAGE_DIR}/mars-hackathon-2026.webp`,
    thumbnail: `${IMAGE_DIR}/mars-hackathon-2026-thumb.webp`,
    verifyUrl: '', // TODO: tasdiqlash havolasi mavjud bo'lsa shu yerga qo'shing
  },
  {
    id: 'mars-beginner-2025',
    title: 'Beginner course — Mars IT School',
    issuer: 'Mars IT School',
    date: '2025-02-08',
    descriptionKey: 'certificates.items.marsBeginner.description',
    type: 'course',
    featured: true,
    skills: ['HTML', 'CSS', 'JavaScript'],
    image: `${IMAGE_DIR}/mars-beginner-2025.webp`,
    thumbnail: `${IMAGE_DIR}/mars-beginner-2025-thumb.webp`,
    verifyUrl: '', // TODO: tasdiqlash havolasi mavjud bo'lsa shu yerga qo'shing
  },
  {
    id: 'typing-2025',
    title: 'Typing Assessment',
    issuer: 'Typing.com',
    date: '2025-09-22',
    credentialId: 'TC-20250922-784316',
    stats: { speed: '72 WPM', accuracy: '98%' },
    type: 'skill',
    featured: false,
    image: `${IMAGE_DIR}/typing-2025.webp`,
    thumbnail: `${IMAGE_DIR}/typing-2025-thumb.webp`,
    verifyUrl: '', // TODO: tasdiqlash havolasi mavjud bo'lsa shu yerga qo'shing
  },
]
