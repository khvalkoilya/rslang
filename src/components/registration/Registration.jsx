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
    name: 'password__first',
    type: 'password',
    placeholder: 'password',
    icon: '../../assets/images/password.png',
    state: true,
  },
  {
    id: 3,
    name: 'password_second',
    type: 'password',
    placeholder: 'password',
    icon: '../../assets/images/password.png',
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
    <form className="reg__form">
      {state === 'registration' ? <h1 className="reg__h1">Создать аккаунт</h1> : <h1 className="reg__h1">Вход</h1>}
      {input}
      <div className={state === 'signIn' ? 'reg__wrapper_second' : 'reg__wrapper_first'}>
        {state === 'signIn' && <p>Ещё не с нами?</p>}
        <button
          type="submit"
          className={state === 'signIn' ? 'reg__button_second' : 'reg__button_first'}
          onClick={() => {
            if (state === 'signIn') setPage('registration');
            console.log('sdvsdvsdvsdv');
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
            console.log('sdvsdvsdvsdv');
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
