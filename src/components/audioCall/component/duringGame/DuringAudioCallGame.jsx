import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import ApplicationData from '../../../context/Context';

import Speaker from '../../../speakerWord/Speaker';
import { getRandomWord, currentWordInButtons } from '../../../shuffleArray/shuffle';

import playAudio from '../../../speakerWord/playAudio';

const NewGame = ({
  setCorrect, correct, setIncorrect, incorrect,
  setNumberAttempts, numberAttempts, setIsPlaying, randomWord, setRandomWord,
}) => {
  const { setPage, wordsNew, wordsAgain } = useContext(ApplicationData);
  const [currentWord, setcurrentWord] = useState(randomWord);

  const compareWords = (buttonId) => {
    setNumberAttempts(numberAttempts + 1);

    setRandomWord(getRandomWord(wordsNew.concat(wordsAgain)));

    setcurrentWord(randomWord);

    if (currentWord.id === buttonId && numberAttempts !== 10) {
      setCorrect(correct + 1);
    } else {
      setIncorrect(incorrect + 1);
    }

    if (numberAttempts !== 9) {
      playAudio(randomWord.audio);
    }

    if (numberAttempts === 9) {
      setNumberAttempts(0);
      setIsPlaying('afterGame');
    }
  };

  const arrButtons = currentWordInButtons(wordsNew.concat(wordsAgain), currentWord).map((e) => (
    <button
      className="btn btnDuringGame"
      type="button"
      key={e.id}
      onClick={() => compareWords(e.id)}
    >
      <div>{e.wordTranslate}</div>
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
        <Speaker
          key={numberAttempts}
          word={currentWord.audio}
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
  randomWord: PropTypes.objectOf(PropTypes.any).isRequired,
  setRandomWord: PropTypes.func.isRequired,
};

export default NewGame;
