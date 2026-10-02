/** Placeholder links should never be presented as working demos or repositories. */
export function isProjectUrlAvailable(value: string): boolean {
  try {
    const url = new URL(value)
    return (
      (url.protocol === 'https:' || url.protocol === 'http:') &&
      !/TODO/i.test(value) &&
      url.hostname !== 'example.com' &&
      !url.hostname.endsWith('.example.com')
    )
  } catch {
    return false
  }
}

/** Same rule as above, for profile social links (LinkedIn, Telegram, …) that may still be placeholders. */
export function isLinkAvailable(value: string): boolean {
  return isProjectUrlAvailable(value) && !/\/username$/i.test(value)
}
