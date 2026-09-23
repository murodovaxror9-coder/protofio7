import type { ReactNode } from 'react'

export function Badge({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-1.5 text-xs font-medium tracking-wide text-violet-200 light:text-violet-700 light:border-violet-400/50 ${className}`}
    >
      {children}
    </span>
  )
}
