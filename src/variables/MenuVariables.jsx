import React, { useContext } from 'react';
import Swiper from '../components/blockWithCards/Swiper';
import Registration from '../components/registration/Registration';
import SignIn from '../components/registration/SignIn';
import GamesPage from '../components/gamesPage/GamesPage';
import ChangePage from '../components/context/Context';
import Card from '../components/card/Card';
import DEFAULT_WORDS from './defaultWords';
import DEFAULT_SETTINGS from './defaultSettings';

export const MAIN_MENU_ITEMS_VALUES = [
  {
    id: 0,
    name: 'Тренировка',
    isAuthorized: true,
    icon: '../../assets/images/dumbbell.svg',
    title: 'train',
    render: (id, title) => {
      const {
        data,
      } = useContext(ChangePage);
      return (
        // data && <Swiper key={`${id}-${title}`} />
        <Card words={DEFAULT_WORDS[5]} settings={DEFAULT_SETTINGS.optional} key={`${id}-${title}`} />
      );
    },
  },
  {
    id: 1,
    name: 'Словарь',
    isAuthorized: false,
    lock: '../../assets/images/locked-padlock.svg',
    icon: '../../assets/images/dictionary.svg',
    title: 'vocabulary',
    render: (id, title) => <div key={`${id}-${title}`}>settings</div>,
  },
  {
    id: 2,
    name: 'Игры',
    isAuthorized: false,
    lock: '../../assets/images/locked-padlock.svg',
    icon: '../../assets/images/game-controller.svg',
    title: 'games',
    render: (id, title) => <GamesPage key={`${id}-${title}`} />,
  },
  {
    id: 3,
    name: 'Демо',
    isAuthorized: true,
    icon: '../../assets/images/flask.svg',
    title: 'demo',
    render: (id, title) => <div key={`${id}-${title}`}>DEMO</div>,
  },
];

export const USER_MENU_ITEMS = [
  {
    id: 0,
    name: 'Статистика',
    isAuthorized: true,
    icon: '../../assets/images/growth.svg',
    title: 'statistics',
    render: (id, title) => <div key={`${id}-${title}`}>statistics</div>,
  },
  {
    id: 1,
    name: 'Настройки',
    isAuthorized: true,
    icon: '../../assets/images/settings.svg',
    title: 'settings',
    render: (id, title) => <div key={`${id}-${title}`}>settings</div>,
  },
  {
    id: 2,
    name: 'Выйти',
    isAuthorized: true,
    icon: '../../assets/images/exit.svg',
    title: 'logOut',
    render: (id, title) => <div key={`${id}-${title}`}>logOut</div>,
  },
  {
    id: 3,
    name: 'Авторизация',
    icon: '../../assets/images/log-in.svg',
    isAuthorized: false,
    title: 'signIn',
    render: (id, title) => <SignIn key={`${id}-${title}`} />,
  },
  {
    id: 4,
    name: 'Регистрация',
    isAuthorized: false,
    icon: '../../assets/images/contract.svg',
    title: 'registration',
    render: (id, title) => <Registration key={`${id}-${title}`} />,
  },
];