import React, { useState } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Main from '../main/Main';
import ChangePage from '../context/Context';
import DEFAULT_WORDS from '../../variables/defaultWords';

const App = () => {
  const [page, setPage] = useState('train');
  const [isAuth, setIsAuth] = useState(true);
  const [userId, setUser] = useState();
  const [words, setWords] = useState(DEFAULT_WORDS);

  return (
    <>
      <ChangePage.Provider value={{
        page, setPage, setWords, setUser, setIsAuth, userId, words,
      }}
      >
        <Header isAuth={isAuth} />
        <Main />
        <Footer />
      </ChangePage.Provider>
    </>
  );
};

export default App;
