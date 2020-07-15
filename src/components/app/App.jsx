import React, { useState, useEffect } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Main from '../main/Main';
import ApplicationData from '../context/Context';
import DEFAULT_WORDS from '../../variables/defaultWords';
import DEFAULT_SETTINGS from '../../variables/defaultSettings';
import { getWordsComplicated, getWordsDelete, loginUser } from '../../utilsApi/utilsApi';
import { DEFAULT_STATISTIC } from '../../variables/defaultStatistic';

const App = () => {
  const isAuthLocal = JSON.parse(localStorage.getItem('isAuthLocal'));
  const [page, setPage] = useState('train');
  const [isAuth, setIsAuth] = useState(false);
  const [userId, setUser] = useState();
  const [words, setWords] = useState(DEFAULT_WORDS);
  const [wordsComplicated, setWordsComplicated] = useState([]);
  const [wordsDelete, setWordsDelete] = useState([]);
  const [wordsNew, setWordsNew] = useState([]);
  const [wordsAgain, setWordsAgain] = useState([]);
  const [settings, setSettings] = useState(DEFAULT_SETTINGS);
  const [doneCards, setDoneCards] = useState();
  const [statistic, setStatistic] = useState(DEFAULT_STATISTIC);
  const [learnNew, setLearnNew] = useState(false);

  window.onload = () => {
    if (isAuthLocal) {
      setWords();
      const user = JSON.parse(localStorage.getItem('user'));
      loginUser(user).then((res) => setUser(res));
      setWordsComplicated(JSON.parse(localStorage.getItem('wordsComplicated')));
      setWordsDelete(JSON.parse(localStorage.getItem('wordsDelete')));
      setWordsNew(JSON.parse(localStorage.getItem('wordsNew')));
      setWordsAgain(JSON.parse(localStorage.getItem('wordsAgain')));
      setSettings(JSON.parse(localStorage.getItem('settings')));
      setDoneCards(JSON.parse(localStorage.getItem('doneCards')));
      setStatistic(JSON.parse(localStorage.getItem('statistic')));
      setLearnNew(JSON.parse(localStorage.getItem('learnNew')));
      setWords(JSON.parse(localStorage.getItem('words')));
      setIsAuth(isAuthLocal);
    }
  };
  const utilWords = async () => {
    if (userId) {
      const { group } = settings.optional;
      const сomplicatedNew = await getWordsComplicated(userId, group);
      const deleteWordsNew = await getWordsDelete(userId, group);
      const сomplicated = сomplicatedNew[0].paginatedResults;
      const deleteWords = deleteWordsNew[0].paginatedResults;
      сomplicated.forEach((e) => {
        const { _id } = e;
        e.id = _id;
      });

      deleteWords.forEach((e) => {
        const { _id } = e;
        e.id = _id;
      });

      setWordsComplicated(сomplicated);
      setWordsDelete(deleteWords);
    }
  };
  const updateLocal = () => {
    if (isAuth) {
      localStorage.setItem('page', page);
      localStorage.setItem('isAuthLocal', JSON.stringify(isAuth));
      localStorage.setItem('words', JSON.stringify(words));
      localStorage.setItem('wordsComplicated', JSON.stringify(wordsComplicated));
      localStorage.setItem('wordsDelete', JSON.stringify(wordsDelete));
      localStorage.setItem('wordsNew', JSON.stringify(wordsNew));
      localStorage.setItem('wordsAgain', JSON.stringify(wordsAgain));
      localStorage.setItem('settings', JSON.stringify(settings));
      localStorage.setItem('doneCards', JSON.stringify(doneCards));
      localStorage.setItem('statistic', JSON.stringify(statistic));
      localStorage.setItem('learnNew', JSON.stringify(learnNew));
    }
  };
  useEffect(() => {
    updateLocal();
  }, [page, words, wordsComplicated,
    wordsDelete, wordsNew, wordsAgain,
    settings, doneCards, statistic, learnNew]);

  useEffect(() => {
    utilWords();
  }, [userId]);
  return (
    <>
      <ApplicationData.Provider value={{
        page,
        setPage,
        words,
        setWords,
        userId,
        setUser,
        isAuth,
        setIsAuth,
        settings,
        setSettings,
        statistic,
        setStatistic,
        wordsComplicated,
        setWordsComplicated,
        wordsDelete,
        setWordsDelete,
        wordsNew,
        setWordsNew,
        wordsAgain,
        setWordsAgain,
        doneCards,
        setDoneCards,
        learnNew,
        setLearnNew,
      }}
      >
        <Header isAuth={isAuth} />
        <Main />
        <Footer />
      </ApplicationData.Provider>
    </>
  );
};

export default App;
