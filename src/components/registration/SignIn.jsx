import React, { useContext, useState, useEffect } from 'react';
import Input from './Input';
import ApplicationData from '../context/Context';
import REGISTRATION from '../../variables/inputRegistrationVariables';
import { loginUser, getWordsAgainAndNew, getSettingUser } from '../../utilsApi/utilsApi';

const SignIn = () => {
  const {
    setSettings, setPage, setUser, setIsAuth, setWords,
  } = useContext(ApplicationData);
  const [userData, setUserData] = useState();

  const utilSignIn = async () => {
    const error = document.querySelector('.reg__error');
    if (userData) {
      try {
        const user = await loginUser(userData);
        const settings = await getSettingUser(user);
        const { wordsPerDay } = settings;
        const { group } = settings.optional;
        const wordsAgainAndNew = await getWordsAgainAndNew(user, group, wordsPerDay);
        const words = wordsAgainAndNew[0].paginatedResults;
        words.forEach((e) => {
          const { _id } = e;
          e.id = _id;
        });
        setWords(words);
        setUser(user);
        setIsAuth(true);
        setSettings(settings);
        console.log(
          'word', words,
          'user', user,
          'set', settings,
        );
        setPage('train');
      } catch (e) {
        error.innerHTML = 'Неверный e-mail или пароль';
        setPage('signIn');
        setIsAuth(false);
      }
    }
  };

  useEffect(() => {
    utilSignIn();
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
