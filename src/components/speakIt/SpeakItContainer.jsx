import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SpeakIt from './SpeakIt';
import './_speakLt.scss';

const SpeakItContainer = ({ words }) => {
  const [updatedArr, setUpdatedArr] = useState(words.map((e) => ({ ...e })));
  const [actualWord, setActualWord] = useState(null);
  const [spokenWord, setSpokenWord] = useState(null);

  const showAdditionalInfo = (e) => {
    setActualWord(e);
    const audio = new Audio(`https://raw.githubusercontent.com/AndreyAmelchenia/rslang-data/master/${e.audio}`);
    audio.play();
  };

  const checkWords = (e) => {
    const ind = updatedArr.findIndex((el) => el.word === e);
    if (ind > -1) {
      const arr = [...updatedArr];
      arr[ind].guessed = true;
      setTimeout(() => {
        setUpdatedArr(arr);
        setSpokenWord(e);
      }, 300);
    }
  };

  const repeat = () => setUpdatedArr(words);

  const recognizeSpeech = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.continous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-US';
    recognition.start();
    recognition.onend = () => {
      recognition.onresult = (e) => checkWords(e.results[0][0].transcript);
      recognition.start();
    };
  };

  return (
    <div className="main-wrapper">
      <SpeakIt
        words={updatedArr}
        showAdditionalInfo={showAdditionalInfo}
        recognize={recognizeSpeech}
        repeat={repeat}
        spokenWord={spokenWord}
        actualWord={actualWord}
      />
    </div>
  );
};

SpeakItContainer.propTypes = {
  words: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default SpeakItContainer;
