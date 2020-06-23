import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Input from '../input/Input';
import { getLetterArr } from './utils';

const Card = ({
  word,
  image,
  textMeaning,
  textExample,
  transcription,
  textExampleTranslate,
  textMeaningTranslate,
  wordTranslate,
}) => {
  const [innerWord, setInnerWord] = useState('');
  const [defaultVal, setDefaultVal] = useState([]);

  const compareWords = () => setDefaultVal(getLetterArr(word, innerWord));

  return (
    <div className="wrapper">
      <Input
        word={word}
        wordLen={word.length}
        setWord={setInnerWord}
        defaultVal={defaultVal}
      />
      <div>{textMeaning}</div>
      <div>{textExample}</div>
      <div>{transcription}</div>
      <div>{textExampleTranslate}</div>
      <div>{textMeaningTranslate}</div>
      <div>{wordTranslate}</div>
      <img src={image} alt={word} />
      <button type="button">выкл перевод</button>
      <button type="button">вкл воспр</button>
      <button type="button">удалить</button>
      <button type="button">сложно</button>
      <button type="button" onClick={compareWords}>далее</button>
    </div>
  );
};

Card.propTypes = {
  word: PropTypes.string,
  image: PropTypes.string,
  textMeaning: PropTypes.string,
  textExample: PropTypes.string,
  transcription: PropTypes.string,
  textExampleTranslate: PropTypes.string,
  textMeaningTranslate: PropTypes.string,
  wordTranslate: PropTypes.string,
};

Card.defaultProps = {
  word: 'word',
  image: 'image',
  textMeaning: 'textMeaning',
  textExample: 'textExample',
  transcription: 'transcription',
  textExampleTranslate: 'textExampleTranslate',
  textMeaningTranslate: 'textMeaningTranslate',
  wordTranslate: 'wordTranslate',
};

export default Card;
