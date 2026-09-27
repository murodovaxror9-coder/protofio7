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
  instagram: SocialLink
  github: SocialLink
  linkedin: SocialLink
  telegramBot: SocialLink
}

export const profile: Profile = {
  name: 'Axror Murodov',
  brand: 'murodov.dev',
  domain: 'axrordev.uz',
  location: 'Tashkent, Uzbekistan',
  email: 'axror6495@gmail.com',
  affiliation: 'Mars IT School',
  phone: '+998 70 520 78 78',
  telegram: {
    label: '@Murodov_777',
    url: 'https://t.me/Murodov_777',
  },
  instagram: {
    label: '@axci_7777',
    url: 'https://www.instagram.com/axci_7777/',
  },
  github: {
    label: 'github.com/murodovaxror9-coder',
    url: 'https://github.com/murodovaxror9-coder',
  },
  linkedin: {
    label: 'linkedin.com/in/axror-murodov',
    url: 'https://www.linkedin.com/in/axror-murodov-b54123403/',
  },
  telegramBot: {
    label: '@murodov_dev_bot', // TODO: Contact form yuboradigan Telegram bot username
    url: 'https://t.me/murodov_dev_bot', // TODO
  },
}
