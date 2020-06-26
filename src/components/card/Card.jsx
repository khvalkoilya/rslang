import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Input from '../input/Input';
import { getLetterArr } from './utils';

const Card = ({
  word,
  image,
  wordTranslate,
  textExample,
  textExampleTranslate,
  textMeaning,
  textMeaningTranslate,
  transcription,
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
        <div className="card__sentence">{textExample}</div>
        <div className="card__ruSentence">{textExampleTranslate}</div>
        <div className="card__sentence">{textMeaning}</div>
        <div className="card__ruSentence">{textMeaningTranslate}</div>
        {/* <div>{transcription}</div> */}
        {/* <img src={image} alt={word} /> */}
        <div className="card__translation-button" />
        <div className="card__audio-button" />
        <button type="button" className="card__button">Удалить</button>
        <button type="button" className="card__button">Сложное</button>
        <button type="button" className="card__button card__button-show" onClick={compareWords}>Показать ответ</button>
      </div>
    </div>
  );
};

Card.propTypes = {
  word: PropTypes.string,
  image: PropTypes.string,
  wordTranslate: PropTypes.string,
  textExample: PropTypes.string,
  textExampleTranslate: PropTypes.string,
  textMeaning: PropTypes.string,
  textMeaningTranslate: PropTypes.string,
  transcription: PropTypes.string,
};

Card.defaultProps = {
  word: 'Run',
  image: 'image',
  wordTranslate: 'Бежать, бегать',
  textExample: 'I <b>run</b> every morning.',
  textExampleTranslate: 'Я бегаю каждое утро',
  textMeaning: '<i>Run</i> - moving fast.',
  textMeaningTranslate: 'Бежать - двигаться быстро',
  transcription: '[RAN]',
};

export default Card;
