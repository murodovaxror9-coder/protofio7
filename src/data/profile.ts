export interface SocialLink {
  label: string
  url: string
}

export interface Profile {
  name: string
  brand: string
  domain: string
  location: string
  email: string
  affiliation: string
  phone: string
  telegram: SocialLink
  github: SocialLink
  linkedin: SocialLink
  telegramBot: SocialLink
}

// TODO: axror6495@gmail.com dan tashqari barcha placeholder qiymatlarni haqiqiy ma'lumotlar bilan to'ldiring.
export const profile: Profile = {
  name: 'Axror Murodov',
  brand: 'murodov.dev',
  domain: 'axrordev.uz',
  location: 'Tashkent, Uzbekistan',
  email: 'axror6495@gmail.com',
  affiliation: 'Mars IT School',
  phone: '+998 90 000 00 00', // TODO: haqiqiy telefon raqamini kiriting
  telegram: {
    label: '@username', // TODO: Telegram username
    url: 'https://t.me/username', // TODO: Telegram havolasi
  },
  github: {
    label: 'github.com/username', // TODO: GitHub username
    url: 'https://github.com/username', // TODO: GitHub havolasi
  },
  linkedin: {
    label: 'linkedin.com/in/username', // TODO: LinkedIn username
    url: 'https://linkedin.com/in/username', // TODO: LinkedIn havolasi
  },
  telegramBot: {
    label: '@murodov_dev_bot', // TODO: Contact form yuboradigan Telegram bot username
    url: 'https://t.me/murodov_dev_bot', // TODO
  },
}
