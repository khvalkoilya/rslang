const USER_MENU_ITEMS = [
  {
    id: 0,
    name: 'Статистика',
    isAuthorized: true,
    icon: '../../assets/images/growth.svg',
  },
  {
    id: 1,
    name: 'Настройки',
    isAuthorized: true,
    icon: '../../assets/images/settings.svg',
  },
  {
    id: 2,
    name: 'Выйти',
    isAuthorized: true,
    icon: '../../assets/images/exit.svg',
  },
  {
    id: 3,
    name: 'Авторизация',
    isAuthorized: false,
    icon: '../../assets/images/log-in.svg',
    styles: {
      width: '20px',
      top: '28%',
    }
  },
  {
    id: 4,
    name: 'Регистрация',
    isAuthorized: false,
    icon: '../../assets/images/contract.svg',
    styles: {
      width: '20px',
      top: '28%',
    }
  },
];

export default USER_MENU_ITEMS;
