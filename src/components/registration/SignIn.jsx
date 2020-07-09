import React, { useContext, useState, useEffect } from 'react';
import Input from './Input';
import ChangePage from '../context/Context';
import REGISTRATION from '../../variables/inputRegistrationVariables';
import { loginUser, getWordsData } from '../../utilsApi/utilsApi';

const SignIn = () => {
  const {
    setPage, setWords, setUser, setIsAuth,
  } = useContext(ChangePage);
  const [userData, setUserData] = useState();
  useEffect(() => {
    const error = document.querySelector('.reg__error');
    if (userData) {
      loginUser(userData).then((res) => {
        setUser(res);
        setPage('train');
        setIsAuth(true);
        setTimeout(() => { getWordsData(3, 1).then((result) => setWords(result)); }, 3000);
      }).catch(() => {
        error.innerHTML = 'Неверный e-mail или пароль';
        setPage('signIn');
        setIsAuth(false);
      });
    }
  }, [userData]);

  return (
    <form
      className="reg__form"
      onSubmit={(event) => {
        event.preventDefault();
        const email = document.querySelector('.reg__input_email');
        const firstPassword = document.querySelector('.reg__input_password_first');
        setUserData({ email: email.value, password: firstPassword.value });
      }}
    >

      <h1 className="reg__h1">Вход</h1>
      <div className="reg__error" />
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
