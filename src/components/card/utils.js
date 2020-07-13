import { putWord } from '../../utilsApi/utilsApi';

const time = new Date();
const optionsTime = {
  month: 'short',
  day: 'numeric',
  weekday: 'short',
};

const updateOptionWord = (words, id, param, setDoneCards, setWords, userId) => {
  let word = {};
  let indexWord = 0;
  words.forEach((element, index) => {
    if (element.id === id) {
      word = element;
      indexWord = index;
    }
  });
  console.log(word.userWord);
  word.userWord.optional.data = time.toLocaleString('ru-Ru', optionsTime);
  switch (param) {
    case 'levelRepeat':
      word.userWord.optional.repeat += 1;
      word.userWord.optional.levelRepeat += 1;
      switch (word.userWord.optional.level) {
        case 'easy':
          if (word.userWord.optional.levelRepeat === 2) {
            word.userWord.difficulty = 'study';
          }
          break;
        case 'good':
          if (word.userWord.optional.levelRepeat === 4) {
            word.userWord.difficulty = 'study';
          }
          break;
        case 'hard':
          if (word.userWord.optional.levelRepeat === 6) {
            word.userWord.difficulty = 'study';
          }
          break;
        default:
          break;
      }
      words.splice(indexWord, 1, word);
      setWords(words);
      break;
    case 'error':
      word.userWord.optional.repeat += 1;
      word.userWord.optional.error += 1;
      words.splice(indexWord, 1, word);
      setWords(words);
      break;
    case 'showAnswer':
      word.userWord.optional.repeat += 1;
      words.splice(indexWord, 1, word);
      setWords(words);
      break;
    case 'delete':
      word.userWord.difficulty = 'delete';
      setWords(words.filter((el) => el.id !== id));
      setDoneCards(indexWord);
      break;
    case 'complicated':
      word.userWord.difficulty = 'complicated';
      setWords(words.filter((el) => el.id !== id));
      setDoneCards(indexWord);
      break;
    case 'easy':
      word.userWord.optional.level = 'easy';
      if (word.userWord.optional.levelRepeat >= 2) {
        word.userWord.difficulty = 'study';
      }
      words.splice(indexWord, 1, word);
      setWords(words);
      break;
    case 'good':
      word.userWord.optional.level = 'good';
      if (word.userWord.optional.levelRepeat >= 4) {
        word.userWord.difficulty = 'study';
      }
      words.splice(indexWord, 1, word);
      setWords(words);
      break;
    case 'hard':
      word.userWord.optional.level = 'hard';
      if (word.userWord.optional.levelRepeat >= 6) {
        word.userWord.difficulty = 'study';
      }
      words.splice(indexWord, 1, word);
      setWords(words);
      break;
    case 'again':
      word.userWord.difficulty = 'again';
      word.userWord.optional.levelRepeat -= 1;
      words.splice(indexWord, 1, word);
      setWords(words);
      break;
    default:
      break;
  }

  putWord(userId, id, word.userWord);
};

export default updateOptionWord;
