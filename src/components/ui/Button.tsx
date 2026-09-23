import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'outline' | 'ghost'

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-gradient-to-r from-violet-500 to-cyan-400 text-white shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:brightness-110',
  outline:
    'border border-white/15 text-current hover:border-violet-400/60 hover:bg-white/5',
  ghost: 'text-current hover:bg-white/5',
}

const baseClasses =
  'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'

interface CommonProps {
  variant?: Variant
  children: ReactNode
  className?: string
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }

type ButtonAsAnchor = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

type ButtonProps = ButtonAsButton | ButtonAsAnchor

export function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`

  if ('href' in props && props.href) {
    const { href, ...anchorProps } = props as AnchorHTMLAttributes<HTMLAnchorElement>
    return (
      <a href={href} className={classes} {...anchorProps}>
        {children}
      </a>
    )
  }

  const buttonProps = props as ButtonHTMLAttributes<HTMLButtonElement>
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  )
}
