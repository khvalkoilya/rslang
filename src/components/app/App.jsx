import React, { useState, useEffect } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Main from '../main/Main';
import { loginUser, getWordsData, createUser } from '../../user/utilsApi';
import ChangePage from '../context/Context';

const App = () => {
  const [page, setPage] = useState('train');
  const [isAuth, setIsAuth] = useState(false);
  const [userData, setUserData] = useState();
  const [userId, setUser] = useState();
  const [data, setData] = useState();
  const [stateInput, setStateInput] = useState();

  const funcFormRegistration = (event, user, input) => {
    setUserData(user);
    event.preventDefault();
    setPage('train');
    setIsAuth(true);
    setStateInput(input);
  };
  useEffect(() => {
    if (userData) {
      if (stateInput === 'registration') {
        createUser(userData).then((res) => setUser(res));
      } else if (stateInput === 'signIn') {
        loginUser(userData).then((res) => setUser(res));
      }
      getWordsData().then((res) => setData(res));
    }
  }, [userData]);
  return (
    <>

      <ChangePage.Provider value={{
        page, setPage, funcFormRegistration, setIsAuth, userId, data,
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
