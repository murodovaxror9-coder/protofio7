export interface NavItem {
  id: string
  labelKey: string
  href: string
}

export const navItems: NavItem[] = [
  { id: 'about', labelKey: 'nav.about', href: '/#about' },
  { id: 'tech', labelKey: 'nav.tech', href: '/#tech' },
  { id: 'experience', labelKey: 'nav.experience', href: '/#experience' },
  { id: 'projects', labelKey: 'nav.projects', href: '/#projects' },
  { id: 'ai', labelKey: 'nav.ai', href: '/#ai-tools' },
  { id: 'contact', labelKey: 'nav.contact', href: '/#contact' },
]
