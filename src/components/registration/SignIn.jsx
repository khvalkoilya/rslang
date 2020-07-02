import React, { useContext } from 'react';
import Input from './Input';
import ChangePage from '../context/Context';
import REGISTRATION from '../../variables/inputRegistrationVariables';

const SignIn = () => {
  const { setPage, funcFormRegistration } = useContext(ChangePage);

  return (
    <form
      className="reg__form"
      onSubmit={(event) => {
        const email = document.querySelector('.reg__input_email');
        const firstPassword = document.querySelector('.reg__input_password_first');
        funcFormRegistration(event, { email: email.value, password: firstPassword.value }, 'signIn');
      }}
    >
      <h1 className="reg__h1">Вход</h1>
      {REGISTRATION.map((element) => element.signIn && (
      <Input
        key={`${element.name}-${element.id}`}
        name={element.name}
        type={element.type}
        placeholder={element.placeholder}
        icon={element.icon}
      />
      ))}
      <div className="reg__wrapper_first">
        <button
          type="submit"
          className="reg__button_first"
        >
          Войти
        </button>
      </div>
      <div className="reg__wrapper_second">
        <p>Ещё не с нами?</p>
        <button
          type="submit"
          className="reg__button_second"
          onClick={(event) => {
            event.preventDefault();
            setPage('registration');
          }}
        >
          Присоединиться
        </button>
      </div>

    </form>
  );
};

export default SignIn;
