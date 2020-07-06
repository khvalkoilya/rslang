import React, { useState } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Main from '../main/Main';
import ChangePage from '../context/Context';
import DEFAULT_WORDS from '../../variables/defaultWords';

const App = () => {
  const [page, setPage] = useState('train');
  const [isAuth, setIsAuth] = useState(false);
  const [userId, setUser] = useState();
  const [data, setData] = useState(DEFAULT_WORDS);

  return (
    <>
      <ChangePage.Provider value={{
        page, setPage, setData, setUser, setIsAuth, userId, data,
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
