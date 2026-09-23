import { useLanguage } from './useLanguage'

type AnyRecord = Record<string, unknown>

function resolvePath(source: AnyRecord, path: string): unknown {
  return path.split('.').reduce<unknown>((acc, key) => {
    if (acc && typeof acc === 'object' && key in (acc as AnyRecord)) {
      return (acc as AnyRecord)[key]
    }
    return undefined
  }, source)
}

/**
 * useT('hero.badge') -> translated string for the current language.
 * Falls back to the key itself if the path is missing, so a typo is visible instead of crashing.
 */
export function useT() {
  const { dict } = useLanguage()

  return (path: string): string => {
    const value = resolvePath(dict as AnyRecord, path)
    return typeof value === 'string' ? value : path
  }
}
