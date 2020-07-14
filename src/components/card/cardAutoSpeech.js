import { getUrlData } from '../../utilsApi/utilsApi';

const cardAutoSpeech = (audio, audioExample, audioMeaning, hasAutoSpeech, autoSpeechLocal,
  hasTranslation, hasExample, hasMeaning, setIsPlaying) => {
  if (hasAutoSpeech && autoSpeechLocal) {
    setIsPlaying(true);
    const tracks = [];
    if (hasTranslation) tracks.push(audio);
    if (hasExample) tracks.push(audioExample);
    if (hasMeaning) tracks.push(audioMeaning);
    const player = document.getElementById('card-audio');
    let current = 0;
    player.src = getUrlData(tracks[0]);
    player.onended = () => {
      current += 1;
      if (current >= tracks.length) {
        setIsPlaying(false);
        return;
      }
      player.src = getUrlData(tracks[current]);
      player.play();
    };
  }
};

export default cardAutoSpeech;
