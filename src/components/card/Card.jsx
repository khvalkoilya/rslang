import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Input from '../input/Input';
import { getLetterArr } from './utils';

const Card = ({
  word,
  image,
  wordTranslate,
  textMeaning,
  textExample,
  transcription,
  textExampleTranslate,
  textMeaningTranslate,
}) => {
  const [innerWord, setInnerWord] = useState('');
  const [defaultVal, setDefaultVal] = useState([]);

  const compareWords = () => setDefaultVal(getLetterArr(word, innerWord));

  return (
    <div className="card">
      <div className="card-wrapper">
        <Input
          word={word}
          wordLen={word.length}
          setWord={setInnerWord}
          defaultVal={defaultVal}
        />
        <div className="card__translate">{wordTranslate}</div>
        <div>{textMeaning}</div>
        <div>{textExample}</div>
        <div>{transcription}</div>
        <div>{textExampleTranslate}</div>
        <div>{textMeaningTranslate}</div>
        <img src={image} alt={word} />
        <button type="button">выкл перевод</button>
        <button type="button">вкл воспр</button>
        <button type="button">удалить</button>
        <button type="button">сложно</button>
        <button type="button" onClick={compareWords}>далее</button>
      </div>
    </div>
  );
};

Card.propTypes = {
  word: PropTypes.string,
  image: PropTypes.string,
  wordTranslate: PropTypes.string,
  textMeaning: PropTypes.string,
  textExample: PropTypes.string,
  transcription: PropTypes.string,
  textExampleTranslate: PropTypes.string,
  textMeaningTranslate: PropTypes.string,
};

Card.defaultProps = {
  word: 'Run',
  image: 'image',
  wordTranslate: 'Бежать, бегать',
  textMeaning: 'textMeaning',
  textExample: 'textExample',
  transcription: 'transcription',
  textExampleTranslate: 'textExampleTranslate',
  textMeaningTranslate: 'textMeaningTranslate',
};

export default Card;
