import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import arrWords from '../../wordInf';

import './_duringGame.scss';

const NewGame = ({
  setCorrect, correct, setIncorrect, incorrect,
  numberAttemptsPlusOne, numberAttempts, setRenderGame, renderGame,
}) => {
  const [timer, setTimer] = useState(5);
  const [numberCurrentWord, setNumberCurrentWord] = useState(
    arrWords[Math.floor(Math.random() * (Math.floor(arrWords.length)))],
  );

  const workerWithKeyframe = () => {
    const [flyObj, ...all] = [...document.getElementsByClassName('currentWord')];
    flyObj.classList.remove('animation');
    setTimeout(() => flyObj.classList.add('animation'), 0);
    console.log(all);
  };

  useEffect(() => {
    let interval = null;

    if (timer > 0) {
      interval = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);
    }

    if (timer === 0 && numberAttempts !== 10) {
      setIncorrect(incorrect + 1);
      numberAttemptsPlusOne(numberAttempts + 1);
      setTimer(timer + 5);
      setNumberCurrentWord(arrWords[Math.floor(Math.random() * (Math.floor(arrWords.length)))]);
      workerWithKeyframe();
    }

    if (timer === 0 && numberAttempts === 10) {
      clearInterval(interval);
      setRenderGame(!renderGame);
    }

    return () => clearInterval(interval);
  });

  const compareWords = (buttonId) => {
    numberAttemptsPlusOne(numberAttempts + 1);
    if (numberCurrentWord.id === buttonId) {
      setCorrect(correct + 1);
      setNumberCurrentWord(arrWords[Math.floor(Math.random() * (Math.floor(arrWords.length)))]);
      workerWithKeyframe();
    } else {
      setIncorrect(incorrect + 1);
      setNumberCurrentWord(arrWords[Math.floor(Math.random() * (Math.floor(arrWords.length)))]);
      workerWithKeyframe();
    }
  };

  const arrButtons = arrWords.map((e) => (
    <button
      className="btn btnDuringGame"
      type="button"
      key={e.id}
      onClick={() => compareWords(e.id)}
    >
      <div>{e.word}</div>
    </button>
  ));

  return (
    <div className="content">
      <div className="check-line">
        <div className="check">
          {correct}
          /
          {numberAttempts}
        </div>
        <button type="button" className="btnExit">X</button>
      </div>

      <div>
        <div className="currentWord animation">
          {numberCurrentWord.wordTranslate}
        </div>
        <div>
          {arrButtons}
        </div>
      </div>
    </div>
  );
};

NewGame.propTypes = {
  setCorrect: PropTypes.func.isRequired,
  correct: PropTypes.number.isRequired,
  setIncorrect: PropTypes.func.isRequired,
  incorrect: PropTypes.number.isRequired,
  numberAttemptsPlusOne: PropTypes.func.isRequired,
  numberAttempts: PropTypes.number.isRequired,
  setRenderGame: PropTypes.func.isRequired,
  renderGame: PropTypes.bool.isRequired,
};

export default NewGame;
