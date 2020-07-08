const COMMON_SETTING_ITEMS = [
  {
    name: 'new_words',
    text: 'Количество новых слов',
    type: 'text',
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
    name: 'translate',
    text: 'перевод',
    type: 'checkbox',
    id: 4,
  },
  {
    name: 'meaning',
    text: 'значение',
    type: 'checkbox',
    id: 5,
  },
  {
    name: 'use',
    text: 'использование',
    type: 'checkbox',
    id: 6,
  },
  {
    name: 'show_result',
    text: 'показать ответ',
    type: 'checkbox',
    id: 7,
  },
  {
    name: 'transcription',
    text: 'транскрипция',
    type: 'checkbox',
    id: 2,
  },
  {
    name: 'image',
    text: 'картинка-ассоциация',
    type: 'checkbox',
    id: 3,
  },
];

const CLASSIFICATION_SETTING_ITEMS = [
  {
    name: 'deleted',
    text: 'удаленные',
    type: 'checkbox',
    id: 8,
  },
  {
    name: 'difficult',
    text: 'сложные',
    type: 'checkbox',
    id: 9,
  },
];

export { CLASSIFICATION_SETTING_ITEMS, HELP_SETTING_ITEMS, COMMON_SETTING_ITEMS };
