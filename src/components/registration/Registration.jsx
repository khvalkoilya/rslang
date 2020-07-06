import React, { useContext, useState, useEffect } from 'react';
import Input from './Input';
import ChangePage from '../context/Context';
import REGISTRATION from '../../variables/inputRegistrationVariables';
import { createUser, getWordsData } from '../../user/utilsApi';

const Registration = () => {
  const {
    setPage, setData, setUser, setIsAuth,
  } = useContext(ChangePage);
  const [userData, setUserData] = useState();
  useEffect(() => {
    const error = document.querySelector('.reg__error');
    if (userData) {
      createUser(userData).then((res) => {
        setUser(res);
        setPage('train');
        setIsAuth(true);
        getWordsData().then((result) => setData(result));
      }).catch(() => {
        error.innerHTML = 'Неверный e-mail или пароль';
        setPage('registration');
        setIsAuth(false);
      });
    }
  }, [userData]);
  return (
    <form
      className="reg__form"
      onSubmit={(event) => {
        const email = document.querySelector('.reg__input_email');
        const firstPassword = document.querySelector('.reg__input_password_first');
        const secondPassword = document.querySelector('.reg__input_password_second');
        if (firstPassword.value === secondPassword.value) {
          event.preventDefault();
          setUserData({ email: email.value, password: firstPassword.value });
        } else {
          const error = document.querySelector('.reg__error');
          error.innerHTML = 'Неверный повторный пароль';
          event.preventDefault();
        }
      }}
    >
      <h1 className="reg__h1">Создать аккаунт</h1>
      <div className="reg__error" />
      {REGISTRATION.map((element) => (
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
          Присоединиться
        </button>
      </div>
      <div className="reg__wrapper_second">
        <p>Уже с нами?</p>
        <button
          type="submit"
          className="reg__button_second"
          onClick={(e) => {
            e.preventDefault();
            setPage('signIn');
          }}
        >
          Войти
        </button>
      </div>
    </form>
  );
};

export default Registration;
