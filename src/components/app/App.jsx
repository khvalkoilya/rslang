import React, { useState } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
// import Main from '../main/Main';
import Props from '../context/Context';
import Sprint from '../sprintGame/SprintGame';

const App = () => {
  const [page, setPage] = useState('train');
  return (
    <>
      <Props.Provider value={setPage}>
        <Header />

        <Sprint />
        {/* <Main page={page} /> */}
        <Footer />
      </Props.Provider>
    </>
  );
};

export default App;
