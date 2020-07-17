const REGISTRATION = [
  {
    id: 0,
    name: 'name',
    type: 'text',
    placeholder: 'Имя',
    icon: '../../assets/images/user.svg',
    signIn: false,
  },
  {
    id: 1,
    name: 'email',
    type: 'email',
    placeholder: 'email',
    icon: '../../assets/images/email.png',
    signIn: true,
  },
  {
    id: 2,
    name: 'password_first',
    type: 'password',
    placeholder: 'Пароль',
    icon: '../../assets/images/locked-padlock.svg',
    signIn: true,
  },
  {
    id: 3,
    name: 'password_second',
    type: 'password',
    placeholder: 'Повторить пароль',
    icon: '../../assets/images/locked-padlock.svg',
    signIn: false,
  },
];

export default REGISTRATION;
