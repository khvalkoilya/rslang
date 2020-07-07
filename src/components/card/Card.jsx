import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Input from '../input/Input';
import { getLetterArr } from './utils';
import { getUrlData } from '../../utils/utilsApi';

const Card = ({
  data, swiper, setAddSlide,
}) => {
  const [innerWord, setInnerWord] = useState('');
  const [defaultVal, setDefaultVal] = useState([]);

  const compareWords = () => setDefaultVal(getLetterArr(data.word, innerWord));

  return (
    <div className="card">
      <div className="card-wrapper">
        <Input
          word={data.word}
          wordLen={data.word.length}
          setWord={setInnerWord}
          defaultVal={defaultVal}
        />
        <div className="card__translate">{data.wordTranslate}</div>
        <div className="card__sentence">{data.textExample}</div>
        <div className="card__ruSentence">{data.textExampleTranslate}</div>
        <div className="card__sentence">{data.textMeaning}</div>
        <div className="card__transcription">{data.transcription}</div>
        <div className="card__ruSentence">{data.textMeaningTranslate}</div>
        <img src={getUrlData(data.image)} alt={data.word} className="card__image" />
        <div className="card__translation-button" />
        <div className="card__audio-button" />
        <button type="button" className="card__button">Удалить</button>
        <button type="button" className="card__button">Сложное</button>
        <button
          type="button"
          className="card__button card__button-show"
          onClick={() => {
            compareWords();
            swiper.slideNext();
            console.log(swiper.activeIndex);
            if (swiper.activeIndex === 2) {
              setAddSlide(true);
              console.log('hbdvfkjhbfvkjvb');
            }
          }}
        >
          Показать ответ

        </button>
      </div>
    </div>
  );
};

Card.propTypes = {
  setAddSlide: PropTypes.func.isRequired,
  swiper: PropTypes.shape({
    slideNext: PropTypes.func,
    activeIndex: PropTypes.number,
  }),
  data: PropTypes.shape({
    word: PropTypes.string,
    image: PropTypes.string,
    wordTranslate: PropTypes.string,
    textExample: PropTypes.string,
    textExampleTranslate: PropTypes.string,
    textMeaning: PropTypes.string,
    textMeaningTranslate: PropTypes.string,
    transcription: PropTypes.string,
  }),
};

Card.defaultProps = {
  data: {
    word: 'Run',
    image: './assets/images/run.jpg',
    wordTranslate: 'Бежать, бегать',
    textExample: 'I <b>run</b> every morning.',
    textExampleTranslate: 'Я бегаю каждое утро',
    textMeaning: '<i>Run</i> - moving fast.',
    textMeaningTranslate: 'Бежать - двигаться быстро',
    transcription: '[RAN]',
  },
  swiper: {},
};

export default Card;
