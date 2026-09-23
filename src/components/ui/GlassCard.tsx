import type { HTMLAttributes, ReactNode } from 'react'

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  hover?: boolean
}

export function GlassCard({ children, hover = false, className = '', ...props }: GlassCardProps) {
  return (
    <div
      className={`glass-card rounded-2xl p-6 ${
        hover ? 'transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/40' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
