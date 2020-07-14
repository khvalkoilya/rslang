import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
// import Main from '../main/Main';
import Props from '../context/Context';
import Sprint from '../sprintGame/SprintGame';

const App = () => (
  <>
    <Props.Provider>
      <Header />

      <Sprint />
      {/* <Main page={page} /> */}
      <Footer />
    </Props.Provider>
  </>
);
export default App;
