import type { Lang } from '../i18n/translations'

const UZ_MONTHS = [
  'yanvar',
  'fevral',
  'mart',
  'aprel',
  'may',
  'iyun',
  'iyul',
  'avgust',
  'sentyabr',
  'oktyabr',
  'noyabr',
  'dekabr',
]

const EN_MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

/** isoDate: "YYYY-MM-DD" -> "16-avgust, 2026" (uz) or "Aug 16, 2026" (en) */
export function formatCertificateDate(isoDate: string, lang: Lang): string {
  const [year, month, day] = isoDate.split('-').map(Number)
  const monthIndex = month - 1

  if (lang === 'uz') {
    return `${day}-${UZ_MONTHS[monthIndex]}, ${year}`
  }
  return `${EN_MONTHS[monthIndex]} ${day}, ${year}`
}
