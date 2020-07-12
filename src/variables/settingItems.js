const COMMON_SETTING_ITEMS = [
  {
    name: 'new_words',
    text: 'Количество новых слов',
    type: 'number',
    id: 0,
  },
  {
    name: 'number_cards',
    text: 'Количество карточек',
    type: 'text',
    id: 1,
  },
];

const HELP_SETTING_ITEMS = [
  {
    name: 'hasTranslation',
    text: 'перевод',
    type: 'checkbox',
    id: 4,
  },
  {
    name: 'hasMeaning',
    text: 'значение',
    type: 'checkbox',
    id: 5,
  },
  {
    name: 'hasExample',
    text: 'использование',
    type: 'checkbox',
    id: 6,
  },
  {
    name: 'hasShowingAnswer',
    text: 'показать ответ',
    type: 'checkbox',
    id: 7,
  },
  {
    name: 'hasTranscription',
    text: 'транскрипция',
    type: 'checkbox',
    id: 2,
  },
  {
    name: 'hasImage',
    text: 'картинка-ассоциация',
    type: 'checkbox',
    id: 3,
  },
  {
    name: 'hasAutoSpeech',
    text: 'автовоспроизведение',
    type: 'checkbox',
    id: 3,
  },
  {
    name: 'hasAutoTranslation',
    text: 'автоперевод',
    type: 'checkbox',
    id: 3,
  },
];

const CLASSIFICATION_SETTING_ITEMS = [
  {
    name: 'hasDelete',
    text: 'удаленные',
    type: 'checkbox',
    id: 8,
  },
  {
    name: 'hasDifficult',
    text: 'сложные',
    type: 'checkbox',
    id: 9,
  },
  {
    name: 'hasIntervalButtons',
    text: 'оценка угаданного слова',
    type: 'checkbox',
    id: 10,
  },
];

export { CLASSIFICATION_SETTING_ITEMS, HELP_SETTING_ITEMS, COMMON_SETTING_ITEMS };
