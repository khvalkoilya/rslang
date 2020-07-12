const time = new Date();
const optionsTime = {
  month: 'short',
  day: 'numeric',
  weekday: 'short',
};

const updateOptionWord = (words, id, param, setWords, put, userId) => {
  const optionalWord = {
    difficulty: '',
    optional: {},
  };
  words.forEach((element) => {
    if (element.id === id) {
      optionalWord.difficulty = element.userWord.difficulty;
      optionalWord.optional = element.userWord.optional;
    }
  });
  switch (param) {
    case 'levelRepeat':
      optionalWord.optional.data = time.toLocaleString('ru-Ru', optionsTime);
      optionalWord.optional.repeat += 1;
      optionalWord.optional.levelRepeat += 1;
      switch (optionalWord.optional.level) {
        case 'easy':
          if (optionalWord.optional.levelRepeat === 2) {
            optionalWord.difficulty = 'study';
            put(userId, id, optionalWord);
            setWords(words.filter((el) => el.id !== el));
          }
          break;
        case 'good':
          if (optionalWord.optional.levelRepeat === 4) {
            optionalWord.difficulty = 'study';
            put(userId, id, optionalWord);
            setWords(words.filter((el) => el.id !== el));
          }
          break;
        case 'hard':
          if (optionalWord.optional.levelRepeat === 6) {
            optionalWord.difficulty = 'study';
            put(userId, id, optionalWord);
            setWords(words.filter((el) => el.id !== el));
          }
          break;
        default:
          break;
      }
      break;
    case 'error':
      optionalWord.optional.data = time.toLocaleString('ru-Ru', optionsTime);
      optionalWord.optional.repeat += 1;
      optionalWord.optional.error += 1;
      break;
    case 'delete':
      optionalWord.difficulty = 'delete';
      put(userId, id, optionalWord);
      setWords(words.filter((el) => el.id !== el));
      break;
    case 'complicated':
      optionalWord.difficulty = 'complicated';
      put(userId, id, optionalWord);
      setWords(words.filter((el) => el.id !== el));
      break;
    default:
      break;
  }
};

export default updateOptionWord;
