import React, { useState, useEffect } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import SpeakLt from '../speakLt/SpeakLt';

const App = () => {
  const [words, setWords] = useState(null);

  const getWords = (page, group) => {
    const url = `https://afternoon-falls-25894.herokuapp.com/words?page=${page}&group=${group}`;
    fetch(url)
      .then((res) => res.json())
      .then((res) => setWords(res.slice(0, 10)));
  };

  useEffect(() => getWords(1, 1), []);

  return (
    <>
      <Header />
      {words && <SpeakLt words={words} />}
      <Footer />
    </>
  );
};

export default App;
