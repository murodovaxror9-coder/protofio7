import { ArrowUp, Mail, Send } from 'lucide-react'
import { InstagramIcon, LinkedinIcon } from '../components/ui/BrandIcons'
import { navItems } from '../data/navigation'
import { profile } from '../data/profile'
import { useT } from '../hooks/useT'

export function Footer() {
  const t = useT()
  const year = new Date().getFullYear()

  const socials = [
    { icon: Mail, href: `mailto:${profile.email}`, label: 'Email' },
    { icon: Send, href: profile.telegram.url, label: 'Telegram' },
    { icon: InstagramIcon, href: profile.instagram.url, label: 'Instagram' },
    { icon: LinkedinIcon, href: profile.linkedin.url, label: 'LinkedIn' },
  ]

  return (
    <footer className="relative border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 sm:px-8 md:flex-row md:justify-between">
        <div className="text-center md:text-left">
          <div className="text-sm font-bold">
            {profile.name} <span className="text-white/40 light:text-black/40">/ {profile.brand}</span>
          </div>
          <div className="mt-1 text-xs text-white/40 light:text-black/40">
            © {year} {profile.name}. {t('footer.rights')}
          </div>
        </div>

        <div className="flex gap-1">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="rounded-lg px-3 py-2 text-xs font-medium text-white/60 hover:bg-white/5 hover:text-white light:text-black/60 light:hover:text-black"
            >
              {t(item.labelKey)}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/60 transition-colors hover:border-violet-400/50 hover:text-white light:text-black/60"
            >
              <social.icon size={15} />
            </a>
          ))}
          <a
            href="#top"
            aria-label={t('footer.backToTop')}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/60 transition-colors hover:border-cyan-400/50 hover:text-white light:text-black/60"
          >
            <ArrowUp size={15} />
          </a>
        </div>
      </div>

      <div className="mx-auto mt-6 max-w-6xl px-5 text-center text-[11px] text-white/30 light:text-black/30 sm:px-8">
        {t('footer.builtWith')}
      </div>
    </footer>
  )
}
