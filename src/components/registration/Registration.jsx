import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import Props from '../context/Context';

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

const Registration = ({ state }) => {
  let input;
  const setPage = useContext(Props);
  if (state === 'signIn') {
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
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      {state === 'registration' ? <h1 className="reg__h1">Создать аккаунт</h1> : <h1 className="reg__h1">Вход</h1>}
      {input}
      <div className={state === 'signIn' ? 'reg__wrapper_second' : 'reg__wrapper_first'}>
        {state === 'signIn' && <p>Ещё не с нами?</p>}
        <button
          type="submit"
          className={state === 'signIn' ? 'reg__button_second' : 'reg__button_first'}
          onClick={() => {
            if (state === 'signIn') setPage('registration');
          }}
        >
          Присоединиться
        </button>
      </div>
      <div className={state === 'registration' ? 'reg__wrapper_second' : 'reg__wrapper_first'}>
        {state === 'registration' && <p>Уже с нами?</p>}
        <button
          type="submit"
          className={state === 'registration' ? 'reg__button_second' : 'reg__button_first'}
          onClick={() => {
            if (state === 'registration') setPage('signIn');
          }}
        >
          Войти
        </button>
      </div>
    </form>
  );
};

Registration.propTypes = {
  state: PropTypes.string.isRequired,
};
export default Registration;
