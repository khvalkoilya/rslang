export const MAIN_MENU_ITEMS_VALUES = [
  {
    id: 0,
    name: 'Тренировка',
    isAuthorized: true,
    icon: '../../assets/images/dumbbell.svg',
    props: 'train',
  },
  {
    id: 1,
    name: 'Словарь',
    isAuthorized: false,
    lock: '../../assets/images/locked-padlock.svg',
    icon: '../../assets/images/dictionary.svg',
    props: 'vocabulary',
  },
  {
    id: 2,
    name: 'Игры',
    isAuthorized: false,
    lock: '../../assets/images/locked-padlock.svg',
    icon: '../../assets/images/game-controller.svg',
    props: 'games',
  },
  {
    id: 3,
    name: 'Демо',
    isAuthorized: true,
    icon: '../../assets/images/flask.svg',
    props: 'demo',
  }
];

export const MENU = [];
