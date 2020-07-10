import { getUrlData } from '../../utilsApi/utilsApi';
import changeSlide from './changeSlide';

const cardAutoSpeech = (audio, audioExample, audioMeaning, setDoneCards,
  swiper, setAddSlide, hasAutoSpeech, autoSpeechLocal) => {
  if (hasAutoSpeech && autoSpeechLocal) {
    const active = document.querySelector('.swiper-slide-active');
    active.querySelector('.card__button-show').classList.add('card-none');
    const tracks = [audio, audioExample, audioMeaning,];
    const player = document.getElementById('card-audio');
    let current = 0;
    player.src = getUrlData(tracks[0]);
    player.onended = () => {
      current += 1;
      if (current >= tracks.length) changeSlide(setDoneCards, swiper, setAddSlide);
      player.src = getUrlData(tracks[current]);
      player.play();
    };
  }
};

export default cardAutoSpeech;
