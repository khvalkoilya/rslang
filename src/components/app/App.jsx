import React, { useState, useEffect } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import SpeakLt from '../speakLt/SpeakLt';
import Main from '../main/Main';
import Props from '../context/Context';

const App = () => {
  const [words, setWords] = useState(null);
  const [page, setPage] = useState(0);

  const getWords = (pages, group) => {
    const url = `https://afternoon-falls-25894.herokuapp.com/words?page=${pages}&group=${group}`;
    fetch(url)
      .then((res) => res.json())
      .then((res) => setWords(res.slice(0, 10)));
  };

  useEffect(() => getWords(1, 1), []);

  return (
    <Props.Provider value={setPage}>
      <Header />
      <Main page={page} />
      {words && <SpeakLt words={words} />}
      <Footer />
    </Props.Provider>
  );
};

export default App;
