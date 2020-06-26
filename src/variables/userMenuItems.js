const USER_MENU_ITEMS = [
  {
    id: 0,
    name: 'Статистика',
    isAuthorized: true,
    icon: '../../assets/images/growth.svg',
    props: 'statistics',
  },
  {
    id: 1,
    name: 'Настройки',
    isAuthorized: true,
    icon: '../../assets/images/settings.svg',
    props: 'settings',
  },
  {
    id: 2,
    name: 'Выйти',
    isAuthorized: true,
    icon: '../../assets/images/exit.svg',
    props: 'logOut',
  },
  {
    id: 3,
    name: 'Авторизация',
    isAuthorized: false,
    props: 'signIn',
  },
  {
    id: 4,
    name: 'Регистрация',
    isAuthorized: false,
    props: 'registration',
  },
];

export default USER_MENU_ITEMS;
