const COMMON_SETTING_ITEMS = [
  [
    {
      name: 'new_words',
      text: 'Количество новых слов',
      state: 44,
      // type: 'text',
      id: 0,
    },
    {
      name: 'number_cards',
      text: 'Количество карточек',
      state: 55,
      // type: 'text',
      id: 1,
    },
  ],
  [
    {
      name: 'transcription',
      text: 'Транскрипция',
      state: false,
      // type: 'checkbox',
      id: 2,
    },
    {
      name: 'image',
      text: 'Картинка-ассоциация',
      state: false,
      // type: 'checkbox',
      id: 3,
    },
  ],
];

const HELP_SETTING_ITEMS = [
  {
    name: 'translate',
    text: 'перевод',
    state: false,
    // type: 'checkbox',
    id: 4,
  },
  {
    name: 'meaning',
    text: 'значение',
    state: false,
    // type: 'checkbox',
    id: 5,
  },
  {
    name: 'use',
    text: 'использование',
    state: false,
    // type: 'checkbox',
    id: 6,
  },
  {
    name: 'show_result',
    text: 'показать ответ',
    state: true,
    // type: 'checkbox',
    id: 7,
  },
];

const CLASSIFICATION_SETTING_ITEMS = [
  {
    name: 'deleted',
    text: 'удаленные',
    state: true,
    // type: 'checkbox',
    id: 8,
  },
  {
    name: 'difficult',
    text: 'сложные',
    state: true,
    // type: 'checkbox',
    id: 9,
  },
];

export { CLASSIFICATION_SETTING_ITEMS, HELP_SETTING_ITEMS, COMMON_SETTING_ITEMS };
