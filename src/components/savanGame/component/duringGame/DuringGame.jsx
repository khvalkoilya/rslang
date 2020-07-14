import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import ApplicationData from '../../../context/Context';
import FallingWord from '../../../fallingWord/FallingWord';

import { outputArr, currentWordInButtons } from '../../../shuffleArray/shuffle';

const NewGame = ({
  setCorrect, correct, setIncorrect, incorrect,
  setNumberAttempts, numberAttempts, setIsPlaying,
}) => {
  const { setPage, words } = useContext(ApplicationData);
  const [currentWord, setcurrentWord] = useState(
    outputArr(words)[Math.floor(Math.random() * (Math.floor(outputArr(words).length)))],
  );

  const restart = () => {
    setcurrentWord(outputArr(words)[Math
      .floor(Math.random() * (Math.floor(outputArr(words).length)))]);
    setNumberAttempts(numberAttempts + 1);
    if (numberAttempts === 9) {
      setIsPlaying('afterGame');
      setNumberAttempts(0);
    }
  };

  const compareWords = (buttonId) => {
    setNumberAttempts(numberAttempts + 1);
    setcurrentWord(outputArr(words)[Math
      .floor(Math.random() * (Math.floor(outputArr(words).length)))]);
    restart();

    if (currentWord.id === buttonId && numberAttempts !== 10) {
      setCorrect(correct + 1);
    } else {
      setIncorrect(incorrect + 1);
    }
    if (numberAttempts === 9) {
      setNumberAttempts(0);
    }
  };

  const arrButtons = currentWordInButtons(words, currentWord).map((e) => (
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
        <button type="button" className="btnExit" onClick={() => setPage('train')}>
          <img src="./assets/images/exit.svg" alt="exitButton" className="btnExitImg" />
        </button>
      </div>

      <div>
        <FallingWord
          key={numberAttempts}
          animate={restart}
          word={currentWord.wordTranslate}
        />
        <div className="blockWithButtons">
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
  setNumberAttempts: PropTypes.func.isRequired,
  numberAttempts: PropTypes.number.isRequired,
  setIsPlaying: PropTypes.func.isRequired,
};

export default NewGame;
