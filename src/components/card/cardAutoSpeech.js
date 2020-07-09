import { getUrlData } from '../../utilsApi/utilsApi';
import changeSlide from './changeSlide';

function cardAutoSpeech(audio, audioMeaning, audioExample, setDoneCards, swiper, setAddSlide) {
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
}

export default cardAutoSpeech;
