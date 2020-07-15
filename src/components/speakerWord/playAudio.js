import { getUrlData } from '../../utilsApi/utilsApi';

const playAudio = (word) => {
  const audio = new Audio();
  audio.src = getUrlData(word);
  audio.autoplay = true;
};

export default playAudio;
