import type { ReactNode } from 'react'

export function Badge({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-xs font-medium tracking-wide text-blue-200 light:text-blue-700 light:border-blue-400/50 ${className}`}
    >
      {children}
    </span>
  )
}
