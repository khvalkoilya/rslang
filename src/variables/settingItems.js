const COMMON_SETTING_ITEMS = [
  {
    name: 'wordsPerDay',
    text: 'Количество новых слов',
    type: 'text',
    id: 0,
    regExp: '[0-9]{2}',
    maxLeng: 2,
  },
  {
    name: 'group',
    text: 'Уровень сложности(0-5)',
    type: 'text',
    id: 1,
    regExp: '[0-5]{1}',
    maxLeng: 1,
  },
];

const HELP_SETTING_ITEMS = [
  {
    name: 'hasTranslation',
    text: 'перевод',
    type: 'checkbox',
    id: 2,
  },
  {
    name: 'hasMeaning',
    text: 'значение',
    type: 'checkbox',
    id: 3,
  },
  {
    name: 'hasExample',
    text: 'использование',
    type: 'checkbox',
    id: 4,
  },
  {
    name: 'hasShowingAnswer',
    text: 'показать ответ',
    type: 'checkbox',
    id: 5,
  },
  {
    name: 'hasTranscription',
    text: 'транскрипция',
    type: 'checkbox',
    id: 6,
  },
  {
    name: 'hasImage',
    text: 'картинка-ассоциация',
    type: 'checkbox',
    id: 7,
  },
  {
    name: 'hasAutoSpeech',
    text: 'автовоспроизведение',
    type: 'checkbox',
    id: 8,
  },
  {
    name: 'hasAutoTranslation',
    text: 'автоперевод',
    type: 'checkbox',
    id: 9,
  },
];

const CLASSIFICATION_SETTING_ITEMS = [
  {
    name: 'hasDelete',
    text: 'удаленные',
    type: 'checkbox',
    id: 10,
  },
  {
    name: 'hasDifficult',
    text: 'сложные',
    type: 'checkbox',
    id: 11,
  },
  {
    name: 'hasIntervalButtons',
    text: 'оценка угаданного слова',
    type: 'checkbox',
    id: 12,
  },
];

export { CLASSIFICATION_SETTING_ITEMS, HELP_SETTING_ITEMS, COMMON_SETTING_ITEMS };
