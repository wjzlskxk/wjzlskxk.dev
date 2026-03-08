import { useEffect, useMemo, useState } from "react";

interface TypingEffectsParam {
  typingSpeed?: number;
  switchDelay?: number;
}

const useAboutMe = ({ typingSpeed = 150, switchDelay = 800 }: TypingEffectsParam) => {
  const phrases = useMemo(() => ["사용자를 생각하는", "가치있는 서비스를 만드는"], []);

  const [displayText, setDisplayText] = useState<string>("");
  const [currentPhraseIdx, setCurrentPhraseIdx] = useState<number>(0);
  const [charIdx, setCharIdx] = useState<number>(0);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIdx];

    if (charIdx < currentPhrase.length) {
      const typingTimeOut = setTimeout(() => {
        setDisplayText((prev) => prev + currentPhrase[charIdx]);
        setCharIdx((prev) => prev + 1);
      }, typingSpeed);

      return () => clearTimeout(typingTimeOut);
    } else {
      const switchTimeOut = setTimeout(() => {
        setCharIdx(0);
        setDisplayText("");
        setCurrentPhraseIdx((prev) => (prev + 1) % phrases.length);
      }, switchDelay);

      return () => clearTimeout(switchTimeOut);
    }
  }, [charIdx, currentPhraseIdx, phrases, typingSpeed, switchDelay]);

  return {
    displayText,
  };
};

export default useAboutMe;
