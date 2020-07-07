import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Input from '../input/Input';
import getLetterArr from './getLetterArr';
import GetPlaceholder from './GetPlaceholder';
import ReplaceBrackets from './ReplaceBrackets';

const filePath = 'https://raw.githubusercontent.com/AndreyAmelchenia/rslang-data/master/';

const Card = ({
  words: {
    word,
    image,
    wordTranslate,
    textExample,
    textExampleTranslate,
    textMeaning,
    textMeaningTranslate,
    transcription,
  },
  settings: {
    hasTranslation,
    hasMeaning,
    hasExample,
    hasTranscription,
    hasImage,
    hasDelete,
    hasDifficult,
    hasAutoSpeech,
    hasAutoTranslation,
    hasShowing,
    // hasIntervalAgain,
    // hasIntervalHard,
    // hasIntervalGood,
    // hasIntervalEasy,
  },
}) => {
  const [innerWord, setInnerWord] = useState('');
  const [defaultVal, setDefaultVal] = useState([]);
  const [completed, setCompleted] = useState(false);
  const [nextButton, setNextButton] = useState(false);
  // const [autoTranslation, setTranslation] = useState(true);

  const checkWord = () => {
    setDefaultVal(getLetterArr(word, innerWord));
    const input = document.querySelector('.card__input');
    input.value = '';
    if (word === innerWord) {
      setCompleted(true);
      input.classList.add('card__input-none');
    } else {
      setCompleted(false);
    }
  };

  return (
    <div className="card">
      <div className="card-wrapper">
        <span className="card__input__container">
          <GetPlaceholder
            defaultVal={defaultVal}
            setCompleted={setCompleted}
            completed={completed}
            setDefaultVal={setDefaultVal}
          />
          <span className="card__input__background">
            <span className="card__input__background__text">{word}</span>
          </span>
          <Input
            wordLen={word.length}
            setWord={setInnerWord}
            setNextButton={setNextButton}
            completed={completed}
          />
        </span>
        {hasTranslation && <div className="card__translate">{wordTranslate}</div>}
        {hasExample && <div className="card__sentence"><ReplaceBrackets text={textExample} completed={completed} word={word} /></div>}
        {hasExample && completed && <div className="card__ruSentence">{textExampleTranslate}</div>}
        {hasMeaning && <div className="card__sentence"><ReplaceBrackets text={textMeaning} completed={completed} word={word} /></div>}
        {hasTranscription && <div className="card__transcription">{transcription}</div>}
        {hasMeaning && completed && <div className="card__ruSentence">{textMeaningTranslate}</div>}
        {hasImage && <img src={`${filePath}${image}`} alt={word} className="card__image" />}
        {hasAutoTranslation && <div className="card__translation-button" />}
        {hasAutoSpeech && <div className="card__audio-button" />}
        {hasDelete && <button type="button" className="card__button">Удалить</button>}
        {hasDifficult && <button type="button" className="card__button">Сложное</button>}
        <button
          type="button"
          className="card__button card__button-show"
          onClick={checkWord}
        >
          {hasShowing && !nextButton ? 'Показать ответ' : 'Далее'}
        </button>
      </div>
    </div>
  );
};

Card.propTypes = {
  words: PropTypes.shape({
    word: PropTypes.string,
    image: PropTypes.string,
    wordTranslate: PropTypes.string,
    textExample: PropTypes.string,
    textExampleTranslate: PropTypes.string,
    textMeaning: PropTypes.string,
    textMeaningTranslate: PropTypes.string,
    transcription: PropTypes.string,
  }),
  settings: PropTypes.shape({
    hasTranslation: PropTypes.bool.isRequired,
    hasMeaning: PropTypes.bool.isRequired,
    hasExample: PropTypes.bool.isRequired,
    hasTranscription: PropTypes.bool.isRequired,
    hasImage: PropTypes.bool.isRequired,
    hasDelete: PropTypes.bool.isRequired,
    hasDifficult: PropTypes.bool.isRequired,
    hasAutoSpeech: PropTypes.bool.isRequired,
    hasAutoTranslation: PropTypes.bool.isRequired,
    hasShowing: PropTypes.bool.isRequired,
    hasIntervalAgain: PropTypes.bool.isRequired,
    hasIntervalHard: PropTypes.bool.isRequired,
    hasIntervalGood: PropTypes.bool.isRequired,
    hasIntervalEasy: PropTypes.bool.isRequired,
  }).isRequired,
};

Card.defaultProps = {
  words: {
    word: 'run',
    image: './assets/images/run.jpg',
    wordTranslate: 'Бежать, бегать',
    textExample: 'I <b>run</b> every morning.',
    textExampleTranslate: 'Я бегаю каждое утро',
    textMeaning: '<i>Run</i> - moving fast.',
    textMeaningTranslate: 'Бежать - двигаться быстро',
    transcription: '[RAN]',
  },
};

export default Card;
