import type { LocalizedText } from './projects'

export interface Testimonial {
  id: string
  name: string
  role: LocalizedText
  quote: LocalizedText
  // Set true only after the author has agreed to public attribution.
  approvedForPublication: boolean
}

// Add genuine, approved recommendations here. No example quotes are published.
export const testimonials: Testimonial[] = []
