import { useEffect, useState } from 'react'

const useAboutMe = () => {
  const phrases = ['사용자를 생각하는', '가치있는 서비스를 만드는']

  const [displayText, setDisplayText] = useState<string>('')
  const [currentPhraseIdx, setCurrentPhraseIdx] = useState<number>(0)
  const [charIdx, setCharIdx] = useState<number>(0)

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIdx]

    if (charIdx < currentPhrase.length) {
      const typingTimeOut = setTimeout(() => {
        setDisplayText((prev) => prev + currentPhrase[charIdx])
        setCharIdx((prev) => prev + 1)
      }, 150)

      return () => clearTimeout(typingTimeOut)
    } else {
      const switchTimeOut = setTimeout(() => {
        setCharIdx(0)
        setDisplayText('')
        setCurrentPhraseIdx((prev) => (prev + 1) % phrases.length)
      }, 800)

      return () => clearTimeout(switchTimeOut)
    }
  }, [charIdx, currentPhraseIdx, phrases])

  return {
    displayText,
  }
}

export default useAboutMe
