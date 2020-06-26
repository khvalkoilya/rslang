import React, { useState } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Main from '../main/Main';
import Props from '../context/Context';

const App = () => {
  const [page, setPage] = useState('registration');
  return (
    <>
      <Props.Provider value={setPage}>
        <Header />
        <Main page={page} />
        <Footer />
      </Props.Provider>
    </>
  );
};

export default App;
