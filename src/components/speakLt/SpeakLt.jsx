import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './_speakLt.scss';

const SpeakLt = ({ words }) => {
  const [actualEl] = useState(null);
  const [isRecognize, setIsRecognize] = useState(false);
  const [spokenWord] = useState(null);

  const btn = words.map((e) => (
    <button
      key={e.id}
      className="words-btn"
      type="button"
      onClick={() => {
        const audio = new Audio(`https://raw.githubusercontent.com/AndreyAmelchenia/rslang-data/master/${e.audio}`);
        audio.play();
      }}
    >
      <div className="word">{e.word}</div>
      <div className="transcription">{e.transcription}</div>
      <img className="speaker" src="./assets/images/speaker.svg" alt="speaker" />
    </button>
  ));

  const recognizeSpeech = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.continous = false;
    recognition.interimResults = true;
    recognition.lang = 'en-US';
    recognition.start();
    recognition.onspeechend = () => {
      recognition.onresult = (e) => console.log(e.results[0][0].transcript);
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

  const showMicrophone = () => (
    <div>
      <div>
        &#127897;
      </div>
      <div>{spokenWord || ''}</div>
    </div>
  );

  const levelToggle = () => (
    Array.from({ length: 5 }, (e, i) => i).map((e) => (
      <button className="btn-level" type="button" onClick={() => {}}>
        {e}
      </button>
    ))
  );

  return (
    <div className="wrapper">
      <div className="level-wrapper">
        {levelToggle()}
      </div>
      {isRecognize && showMicrophone()}
      <div className="img">
        {actualEl && getImg()}
      </div>
      <div className="words-wrapper">
        {btn}
      </div>
      <div className="btn-wrapper">
        <button className="repeat" type="button" onClick={() => console.log('Повторить')}>Повторить</button>
        <button
          className="speech"
          type="button"
          onClick={() => {
            setIsRecognize(!isRecognize);
            recognizeSpeech();
          }}
        >
          Проговорить
        </button>
        <button className="result" type="button" onClick={() => console.log('Результаты')}>Результаты</button>
      </div>
    </div>
  );
};

SpeakLt.propTypes = {
  words: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default SpeakLt;
