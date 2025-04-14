export function speakWonder(text) {
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance();
  utterance.text = text;
  utterance.lang = "pt-BR";
  utterance.rate = 0.9;
  utterance.pitch = 1.1;
  utterance.volume = 1.0;

  const voices = window.speechSynthesis.getVoices();
  if (voices.length > 0) {
    setBestVoice(utterance, voices);
  } else {
    window.speechSynthesis.onvoiceschanged = () => {
      const voices = window.speechSynthesis.getVoices();
      setBestVoice(utterance, voices);
      window.speechSynthesis.speak(utterance);
    };
    return;
  }

  window.speechSynthesis.speak(utterance);
}

function setBestVoice(utterance, voices) {
  const preferredVoices = voices.filter((v) => v.lang === "pt-BR");
  if (preferredVoices.length) {
    const femaleVoice = preferredVoices.find((v) => v.name.includes("Female"));
    utterance.voice = femaleVoice || preferredVoices[0];
  }
}
