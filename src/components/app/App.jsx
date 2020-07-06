import React, { useState } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Main from '../main/Main';
import Props from '../context/Context';

import SavanGame from '../savanGame/SavanGame';

const App = () => {
  const [page, setPage] = useState('train');
  return (
    <>
      <Props.Provider value={setPage}>
        <Header />
        <Main page={page} />
        <SavanGame />
        <Footer />
      </Props.Provider>
    </>
  );
};

export default App;
