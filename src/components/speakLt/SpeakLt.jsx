import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './_speakLt.scss';

const SpeakLt = ({ words }) => {
  const [actualEl] = useState(null);
  const [isRecognize, setIsRecognize] = useState(false);
  const [spokenWord, setSpokenWord] = useState('');
  const [starQuantity] = useState(0);

  // const checkWord = (e) => {
  //   if (spokenWord === e) setStarQuantity(starQuantity + 1);
  // };

  const btns = words.map((e) => (
    <button
      key={e.id}
      className="btn"
      type="button"
      onClick={() => {
        const audio = new Audio(`https://raw.githubusercontent.com/AndreyAmelchenia/rslang-data/master/${e.audio}`);
        audio.play();
      }}
    >
      <div>{e.word}</div>
      <div>{e.transcription}</div>
      &#128264;
    </button>
  ));

  const starBtns = (
    Array.from({ length: starQuantity }, (e, i) => i).map(() => <div />)
  );

  const recognizeSpeech = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.continous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-US';
    recognition.start();
    recognition.onend = () => {
      recognition.onresult = (e) => setSpokenWord(e.results[0][0].transcript);
      recognition.start();
    };
  };

  const getImg = () => (
    <div>
      <img
        src={`https://raw.githubusercontent.com/AndreyAmelchenia/rslang-data/master/${actualEl.image}`}
        alt={actualEl.image}
      />
      <div>{actualEl.wordTranslate}</div>
    </div>
  );

  const showMicrophone = (
    <div>
      <div>
        &#127897;
      </div>
      <div>{spokenWord}</div>
    </div>
  );

  const levelToggle = (
    Array.from({ length: 5 }, (e, i) => i).map((e) => (
      <button type="button" onClick={() => console.log(e)}>
        {e}
      </button>
    ))
  );

  useEffect(() => {
    recognizeSpeech();
    // you have to add checkWord here
  }, []);

  return (
    <div className="wrapper">
      {starBtns}
      {levelToggle}
      {showMicrophone}
      <div className="img">
        {actualEl && getImg()}
      </div>
      <div className="wrapper">
        {btns}
        <button type="button" onClick={() => console.log('Повторить')}>Повторить</button>
        <button
          type="button"
          onClick={() => {
            setIsRecognize(!isRecognize);
            recognizeSpeech();
          }}
        >
          Проговорить
        </button>
        <button type="button" onClick={() => console.log('Результаты')}>Результаты</button>
      </div>
    </div>
  );
};

SpeakLt.propTypes = {
  words: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default SpeakLt;
