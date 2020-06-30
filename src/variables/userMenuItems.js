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
    icon: '../../assets/images/log-in.svg',
    props: 'signIn',
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
    props: 'registration',
    styles: {
      width: '20px',
      top: '28%',
    }
  },
];

export default USER_MENU_ITEMS;
