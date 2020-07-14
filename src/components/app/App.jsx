import React, { useState, useEffect } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Main from '../main/Main';
import ApplicationData from '../context/Context';
import DEFAULT_WORDS from '../../variables/defaultWords';
import DEFAULT_SETTINGS from '../../variables/defaultSettings';
import { getWordsComplicated, getWordsDelete } from '../../utilsApi/utilsApi';
import { DEFAULT_STATISTIC } from '../../variables/defaultStatistic';

const App = () => {
  const [page, setPage] = useState('train');
  const [isAuth, setIsAuth] = useState(false);
  const [userId, setUser] = useState();
  const [words, setWords] = useState(DEFAULT_WORDS);
  const [wordsComplicated, setWordsComplicated] = useState([]);
  const [wordsDelete, setWordsDelete] = useState([]);
  const [wordsNew, setWordsNew] = useState([]);
  const [wordsAgain, setWordsAgain] = useState([]);
  const [settings, setSettings] = useState(DEFAULT_SETTINGS);
  const [doneCards, setDoneCards] = useState(0);
  const [statistic, setStatistic] = useState(DEFAULT_STATISTIC);

  const utilWords = async () => {
    if (userId) {
      const { group } = settings.optional;
      const сomplicated = await getWordsComplicated(userId, group);
      const deleteWords = await getWordsDelete(userId, group);
      setWordsComplicated(сomplicated[0].paginatedResults);
      setWordsDelete(deleteWords[0].paginatedResults);
    }
  };

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
