/* eslint-disable no-param-reassign */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ApplicationData from '../../../context/Context';

import { putWord } from '../../../../utilsApi/utilsApi';

const WordCardsShortInfo = ({
  element, currentArr, currentWords, setWordsDeleteAndComplicated,
}) => {
  const {
    userId,
    words,
    setWords,
    wordsNew,
    setWordsNew,
    wordsAgain,
    setWordsAgain,
  } = useContext(ApplicationData);

  const returnWord = (elem) => {
    setWordsDeleteAndComplicated(currentArr.filter((e) => e.id !== element.id));
    currentWords(currentArr.filter((e) => e.id !== element.id));
    elem.userWord.difficulty = 'again';

    putWord(userId, elem.id, elem.userWord);

    words.push(elem);
    setWords(words);

    if (elem.userWord.repeat === 0) {
      wordsNew.push(elem);
      setWordsNew(wordsNew);
    } else {
      wordsAgain.push(elem);
      setWordsAgain(wordsAgain);
    }
  };

  return (
    <div className="cardContent">
      <div className="dificltWords">
        <div className="word">
          <h3 className="wordText">
            {element.word}
          </h3>
        </div>
        <button type="button" className="buttonInDifWords" onClick={() => returnWord(element)}>Восстановать</button>
      </div>
      <div className="line lineInDifWords" />
    </div>
  );
};

WordCardsShortInfo.propTypes = {
  element: PropTypes.objectOf(PropTypes.any).isRequired,
  currentArr: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentWords: PropTypes.func.isRequired,
  setWordsDeleteAndComplicated: PropTypes.func.isRequired,
};

export default WordCardsShortInfo;
