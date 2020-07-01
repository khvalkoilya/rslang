import React, { useState } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Main from '../main/Main';
import { MainMenuPagesContext, UserMenuPagesContext } from '../context/Context';

const App = () => {
  const [page, setPage] = useState('train');
  return (
    <>
      <MainMenuPagesContext.Provider value={setPage}>
        <UserMenuPagesContext.Provider value={page}>
          <Header />
        </UserMenuPagesContext.Provider>
        <Main page={page} />
        <Footer />
      </MainMenuPagesContext.Provider>
    </>
  );
};

export default App;
