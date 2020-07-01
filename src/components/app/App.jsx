import React, { useState, useEffect } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Main from '../main/Main';
import { loginUser, getWordsData } from '../../user/utilsApi';
import ChangePage from '../context/Context';

const App = () => {
  const [page, setPage] = useState('train');
  const [isAuth, setIsAuth] = useState(false);
  const [userData, setUserData] = useState();
  const [userId, setUser] = useState();
  const [data, setData] = useState();

  const funcFormRegistration = (event, user) => {
    setUserData(user);
    event.preventDefault();
    setPage('train');
    setIsAuth(true);
  };
  useEffect(() => {
    if (userData) {
      loginUser(userData).then((res) => setUser(res));
      getWordsData().then((res) => setData(res));
    }
  }, [userData]);
  return (
    <>
      {userId && console.log(userId, data)}
      <ChangePage.Provider value={{
        page, setPage, funcFormRegistration, setIsAuth,
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
