import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './_speakLt.scss';

const SpeakLt = ({ words }) => {
  const [audio] = useState('https://raw.githubusercontent.com/AndreyAmelchenia/rslang-data/master/files/02_0038.mp3');
  const [actualEl, setActualEl] = useState(null);
  const [isRecognize, setIsRecognize] = useState(false);
  const [spokenWord, setSpokenWord] = useState(null);

  const btn = words.map((e) => (
    <button
      key={e.id}
      className="btn"
      type="button"
      onClick={() => {
        setActualEl(e);
        // setAudio(new Audio(`https://raw.githubusercontent.com/AndreyAmelchenia/rslang-data/master/${e.audio}`));
      }}
    >
      <div>{e.word}</div>
      <div>{e.transcription}</div>
      &#128264;
    </button>
  ));

  useEffect(() => {
    if (isRecognize) {
      audio.play();
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      recognition.continous = false;
      recognition.interimResults = true;
      recognition.lang = 'en-US';
      recognition.start();
      recognition.onspeechend = () => {
        setIsRecognize(!isRecognize);
        recognition.onresult = (e) => setSpokenWord(e.results[0][0].transcript);
      };
      audio.play();
    }
  }, [isRecognize]);

  const getImg = () => (
    <div>
      <img
        src={`https://raw.githubusercontent.com/AndreyAmelchenia/rslang-data/master/${actualEl.image}`}
        alt={actualEl.image}
      />
      <div>{actualEl.wordTranslate}</div>
    </div>
  );

  const isIdentical = () => {
    if (!actualEl) return '';
    return actualEl.word === spokenWord ? 'correct' : 'incorrect';
  };

  return (
    <div className="wrapper">
      <button
        type="button"
        className={`microphone ${isIdentical()}`}
        onClick={() => setIsRecognize(!isRecognize)}
      >
        &#127897;
      </button>
      <div>{spokenWord || ''}</div>
      <div className="img">
        {actualEl && getImg()}
      </div>
      <div className="wrapper">
        {btn}
      </div>
    </div>
  );
};

SpeakLt.propTypes = {
  words: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default SpeakLt;
