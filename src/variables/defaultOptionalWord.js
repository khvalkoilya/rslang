const time = new Date();
const optionsTime = {
  month: 'short',
  day: 'numeric',
  weekday: 'short',
};

const WORD_OPTIONAL_DEFAULT = {
  difficulty: 'again',
  optional: {
    data: time.toLocaleString('ru-Ru', optionsTime),
    repeat: 0,
    level: 'good',
    levelRepeat: 0,
    error: 0,
  },
};

export default WORD_OPTIONAL_DEFAULT;
