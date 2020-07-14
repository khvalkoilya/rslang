/* eslint-disable no-param-reassign */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ApplicationData from '../../../context/Context';

const WordCardsShortInfo = ({ element, currentArr, currentWords }) => {
  const { words, setWords } = useContext(ApplicationData);

  const returnWord = (elem) => {
    currentWords(currentArr.filter((e) => e.id !== element.id && e));
    elem.userWord.difficulty = 'again';
    words.push(words);
    setWords(words);
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
};

export default WordCardsShortInfo;
