import React, { useContext } from 'react';
import Input from './Input';
import ChangePage from '../context/Context';

const REGISTRATION = [
  {
    id: 0,
    name: 'name',
    type: 'text',
    placeholder: 'Имя',
    icon: '../../assets/images/user.svg',
    state: false,
  },
  {
    id: 1,
    name: 'email',
    type: 'email',
    placeholder: 'email',
    icon: '../../assets/images/email.png',
    state: true,
  },
  {
    id: 2,
    name: 'password_first',
    type: 'password',
    placeholder: 'Пароль',
    icon: '../../assets/images/locked-padlock.svg',
    state: true,
  },
  {
    id: 3,
    name: 'password_second',
    type: 'password',
    placeholder: 'Повторить пароль',
    icon: '../../assets/images/locked-padlock.svg',
    state: false,
  },
];

const Registration = () => {
  let input;
  const { page, setPage, funcFormRegistration } = useContext(ChangePage);

  if (page === 'signIn') {
    input = REGISTRATION.map((element) => element.state && (
    <Input
      key={`${element.name}-${element.id}`}
      name={element.name}
      type={element.type}
      placeholder={element.placeholder}
      icon={element.icon}
    />
    ));
  } else {
    input = REGISTRATION.map((element) => (
      <Input
        key={`${element.name}-${element.id}`}
        name={element.name}
        type={element.type}
        placeholder={element.placeholder}
        icon={element.icon}
      />
    ));
  }

  return (
    <form
      className="reg__form"
      onSubmit={(event) => funcFormRegistration(event, { email: 'pmad@tut.by', password: 'Smouk_123' })}
    >
      {page === 'registration' ? <h1 className="reg__h1">Создать аккаунт</h1> : <h1 className="reg__h1">Вход</h1>}
      {input}
      <div className={page === 'signIn' ? 'reg__wrapper_second' : 'reg__wrapper_first'}>
        {page === 'signIn' && <p>Ещё не с нами?</p>}
        <button
          type="submit"
          className={page === 'signIn' ? 'reg__button_second' : 'reg__button_first'}
          onClick={(event) => {
            if (page === 'signIn') {
              event.preventDefault();
              setPage('registration');
            }
          }}

        >
          Присоединиться
        </button>
      </div>
      <div className={page === 'registration' ? 'reg__wrapper_second' : 'reg__wrapper_first'}>
        {page === 'registration' && <p>Уже с нами?</p>}
        <button
          type="submit"
          className={page === 'registration' ? 'reg__button_second' : 'reg__button_first'}
          onClick={(e) => {
            if (page === 'registration') {
              e.preventDefault();
              setPage('signIn');
            }
          }}
        >
          Войти
        </button>
      </div>
    </form>
  );
};

export default Registration;
