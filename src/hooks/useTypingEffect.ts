import { useEffect, useState } from 'react'

interface Options {
  typingSpeed?: number
  deletingSpeed?: number
  pauseDuration?: number
}

export function useTypingEffect(words: string[], options: Options = {}) {
  const { typingSpeed = 90, deletingSpeed = 45, pauseDuration = 1800 } = options
  const [wordIndex, setWordIndex] = useState(0)
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    if (words.length === 0) return

    const currentWord = words[wordIndex % words.length]
    let timeout: ReturnType<typeof setTimeout>

    if (!isDeleting && text === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), pauseDuration)
    } else if (isDeleting && text === '') {
      setIsDeleting(false)
      setWordIndex((prev) => (prev + 1) % words.length)
      timeout = setTimeout(() => {}, typingSpeed)
    } else {
      const next = isDeleting
        ? currentWord.slice(0, text.length - 1)
        : currentWord.slice(0, text.length + 1)
      timeout = setTimeout(() => setText(next), isDeleting ? deletingSpeed : typingSpeed)
    }

    return () => clearTimeout(timeout)
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration])

  return text
}
