import { putWord } from '../../utilsApi/utilsApi';
import { stringifyStatistic } from '../../variables/defaultStatistic';

const time = new Date();
const optionsTime = {
  month: 'short',
  day: 'numeric',
  weekday: 'short',
};

const repeatWords = (word,
  learnNew, words, wordsNew,
  setWordsNew, wordsAgain,
  setWordsAgain) => {
  if (learnNew) {
    setWordsNew(wordsNew.filter((e) => e.id !== word.id));
    wordsAgain.push(word);
    setWordsAgain(wordsAgain);
  } else {
    setWordsNew(words.filter((e) => e.userWord.optional.repeat === 0));
    setWordsAgain(words.filter((e) => e.userWord.optional.repeat !== 0));
  }
};

const updateOptionWord = (
  words, id, param, setDoneCards,
  setWords, userId, statistic,
  wordsComplicated, setWordsComplicated,
  wordsDelete, setWordsDelete, learnNew,
  wordsNew, setWordsNew,
  wordsAgain, setWordsAgain, setStatistic,
) => {
  let word = {};
  let indexWord = 0;
  words.forEach((element, index) => {
    if (element.id === id) {
      word = element;
      indexWord = index;
    }
  });
  let { learnedWords } = statistic;
  const { sN } = statistic.optional;
  const { days } = statistic.optional;
  const today = days.filter((e) => e.day === time.toLocaleString('ru-Ru', optionsTime));
  word.userWord.optional.data = time.toLocaleString('ru-Ru', optionsTime);
  switch (param) {
    case 'levelRepeat':
      word.userWord.optional.repeat += 1;
      word.userWord.optional.levelRepeat += 1;
      today[0].qR += 1;
      sN.qR += 1;
      if (sN.с) {
        sN.cA += 1;
      } else {
        sN.cA = 1;
        sN.с = true;
      }
      switch (word.userWord.optional.level) {
        case 'easy':
          if (word.userWord.optional.levelRepeat === 2) {
            word.userWord.difficulty = 'study';
            learnedWords += 1;
            today[0].lw += 1;
            sN.lw += 1;
            sN.w.push(word.word);
            setWordsAgain(wordsAgain.filter((e) => e.id !== word.id));
          }
          break;
        case 'good':
          if (word.userWord.optional.levelRepeat === 4) {
            word.userWord.difficulty = 'study';
            learnedWords += 1;
            today[0].lw += 1;
            sN.lw += 1;
            sN.w.push(word.word);
            setWordsAgain(wordsAgain.filter((e) => e.id !== word.id));
          }
          break;
        case 'hard':
          if (word.userWord.optional.levelRepeat === 6) {
            word.userWord.difficulty = 'study';
            learnedWords += 1;
            today[0].lw += 1;
            sN.lw += 1;
            sN.w.push(word.word);
            setWordsAgain(wordsAgain.filter((e) => e.id !== word.id));
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
      today[0].qE += 1;
      sN.qE += 1;
      today[0].qR += 1;
      sN.qR += 1;
      if (sN.cA > sN.sOfcA) {
        sN.sOfcA = sN.cA;
        today[0].sOfcA = sN.cA;
      }
      sN.с = false;
      repeatWords(
        word, learnNew, words, wordsNew,
        setWordsNew, wordsAgain, setWordsAgain,
      );
      break;
    case 'showAnswer':
      word.userWord.optional.repeat += 1;
      words.splice(indexWord, 1, word);
      today[0].qR += 1;
      sN.qR += 1;
      learnedWords += 1;
      setWords(words);
      repeatWords(
        word, learnNew, words, wordsNew,
        setWordsNew, wordsAgain, setWordsAgain,
      );
      break;
    case 'delete':
      word.userWord.difficulty = 'delete';
      setWords(words.filter((el) => el.id !== id));
      setDoneCards(indexWord);
      wordsDelete.push(word);
      setWordsDelete(wordsDelete);
      repeatWords(
        word, learnNew, words, wordsNew,
        setWordsNew, wordsAgain, setWordsAgain,
      );
      break;
    case 'complicated':
      word.userWord.difficulty = 'complicated';
      setWords(words.filter((el) => el.id !== id));
      setDoneCards(indexWord);
      wordsComplicated.push(word);
      setWordsComplicated(wordsComplicated);
      repeatWords(
        word, learnNew, words, wordsNew,
        setWordsNew, wordsAgain, setWordsAgain,
      );
      break;
    case 'easy':
      word.userWord.optional.level = 'easy';
      if (word.userWord.optional.levelRepeat >= 2) {
        word.userWord.difficulty = 'study';
        today[0].lw += 1;
        sN.lw += 1;
        sN.w.push(word.word);
        setWordsAgain(wordsAgain.filter((e) => e.id !== word.id));
      }
      words.splice(indexWord, 1, word);
      setWords(words);
      break;
    case 'good':
      word.userWord.optional.level = 'good';
      if (word.userWord.optional.levelRepeat >= 4) {
        word.userWord.difficulty = 'study';
        today[0].lw += 1;
        sN.lw += 1;
        sN.w.push(word.word);
        setWordsAgain(wordsAgain.filter((e) => e.id !== word.id));
      }
      words.splice(indexWord, 1, word);
      setWords(words);
      break;
    case 'hard':
      word.userWord.optional.level = 'hard';
      if (word.userWord.optional.levelRepeat >= 6) {
        word.userWord.difficulty = 'study';
        today[0].lw += 1;
        sN.lw += 1;
        sN.w.push(word.word);
        setWordsAgain(wordsAgain.filter((e) => e.id !== word.id));
      }
      words.splice(indexWord, 1, word);
      setWords(words);
      break;
    case 'again':
      if (word.userWord.difficulty === 'study') {
        today[0].lw -= 1;
        sN.lw -= 1;
        sN.w.pop();
        wordsAgain.push(word);
        setWordsAgain(wordsAgain);
      }
      word.userWord.difficulty = 'again';
      word.userWord.optional.levelRepeat -= 1;
      words.splice(indexWord, 1, word);
      setWords(words);
      break;
    default:
      break;
  }
  putWord(userId, id, word.userWord);

  const stat = {
    learnedWords,
    optional: {
      days,
      sN,
    },
  };
  setStatistic(stat);
  stringifyStatistic(stat, userId);
};

export default updateOptionWord;
