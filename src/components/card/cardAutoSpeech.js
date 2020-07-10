import { getUrlData } from '../../utilsApi/utilsApi';
import changeSlide from './changeSlide';

const cardAutoSpeech = (audio, audioExample, audioMeaning, setDoneCards,
  swiper, setAddSlide, hasAutoSpeech, autoSpeechLocal) => {
  if (hasAutoSpeech && autoSpeechLocal) {
    const tracks = [audio, audioMeaning, audioExample];
    const player = document.getElementById('card-audio');
    let current = 0;
    player.src = getUrlData(tracks[0]);
    player.onended = () => {
      current += 1;
      if (current >= tracks.length) changeSlide(setDoneCards, swiper, setAddSlide);
      player.src = getUrlData(tracks[current]);
      player.play();
    };
  } else {
    changeSlide(setDoneCards, swiper, setAddSlide);
  }
};

export default cardAutoSpeech;
