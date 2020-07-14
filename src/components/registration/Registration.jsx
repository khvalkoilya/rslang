import React, { useContext, useState, useEffect } from 'react';
import Input from './Input';
import ApplicationData from '../context/Context';
import REGISTRATION from '../../variables/inputRegistrationVariables';
import {
  createUser, putSettingUser, getWordsAgainAndNew, createWord,
} from '../../utilsApi/utilsApi';
import WORD_OPTIONAL_DEFAULT from '../../variables/defaultOptionalWord';

const Registration = () => {
  const {
    settings, setPage, setWords, setUser, setIsAuth, setDoneCards, setWordsNew,
  } = useContext(ApplicationData);
  const [userData, setUserData] = useState();

  const utilRegistration = async () => {
    const error = document.querySelector('.reg__error');
    if (userData) {
      try {
        const user = await createUser(userData);
        await putSettingUser(user, settings);
        const { wordsPerDay } = settings;
        const { group } = settings.optional;
        const wordsAgainAndNew = await getWordsAgainAndNew(user, group, wordsPerDay);
        const words = wordsAgainAndNew[0].paginatedResults;
        words.forEach((e) => {
          const { _id } = e;
          e.id = _id;
        });
        const arrCreateWords = [];
        words.forEach((e) => {
          e.userWord = WORD_OPTIONAL_DEFAULT;
          arrCreateWords.push(createWord(user, e.id));
        });
        setWordsNew(words);
        setWords(words);
        setUser(user);
        setIsAuth(true);
        setDoneCards(0);
        setPage('train');
        await Promise.all[arrCreateWords];
      } catch (e) {
        error.innerHTML = 'Неверный e-mail или пароль';
        setIsAuth(false);
      }
    }
  };
  useEffect(() => {
    utilRegistration();
  }, [userData]);
  return (
    <form
      className="reg__form"
      onSubmit={(event) => {
        const email = document.querySelector('.reg__input_email');
        const name = document.querySelector('.reg__input_name');
        const firstPassword = document.querySelector('.reg__input_password_first');
        const secondPassword = document.querySelector('.reg__input_password_second');
        if (firstPassword.value === secondPassword.value) {
          event.preventDefault();
          setUserData({ name: name.value, email: email.value, password: firstPassword.value });
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
