import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Input from '../input/Input';
import getLetterArr from './getLetterArr';
import GetPlaceholder from './GetPlaceholder';
import ReplaceBrackets from './ReplaceBrackets';
import { getUrlData } from '../../utilsApi/utilsApi';
import cardAutoSpeech from './cardAutoSpeech';
import changeSlide from './changeSlide';

const Card = ({
  swiper, setAddSlide, setDoneCards,
  word: {
    word,
    image,
    wordTranslate,
    textExample,
    textExampleTranslate,
    textMeaning,
    textMeaningTranslate,
    transcription,
    audio,
    audioMeaning,
    audioExample,
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
    hasShowingAnswer,
    // hasIntervalButtons,
  },
  autoTranslationLocal,
  setAutoTranslationLocal,
  autoSpeechLocal,
  setAutoSpeechLocal,
}) => {
  const [innerWord, setInnerWord] = useState('');
  const [defaultVal, setDefaultVal] = useState([]);
  const [completed, setCompleted] = useState(false);
  const [nextButton, setNextButton] = useState(false);
  const [skip, setSkip] = useState(false);

  const checkWord = async (enter = false) => {
    setDefaultVal(getLetterArr(word, innerWord));
    const active = document.querySelector('.swiper-slide-active');
    const input = active.querySelector('.card__input');
    input.value = '';
    let localSkip = false;
    if (hasShowingAnswer && !nextButton && !enter) {
      localSkip = true;
      setSkip(localSkip);
    }
    if (word === innerWord || localSkip) {
      setCompleted(true);
      input.classList.add('card-none');
      setNextButton(true);
      cardAutoSpeech(audio, audioExample, audioMeaning, setDoneCards,
        swiper, setAddSlide, hasAutoTranslation, autoSpeechLocal);
    } else {
      setNextButton(false);
    }
  };

  const pressEnter = (e) => {
    if (e.charCode === 13) {
      checkWord(true);
    }
  };

  return (
    <div
      className="card"
      onKeyPressCapture={pressEnter}
    >
      <div className="card-wrapper">
        <span className="card__input__container">
          <GetPlaceholder
            key={word}
            defaultVal={defaultVal}
            completed={completed}
            skip={skip}
          />
          <span className="card__input__background">
            <span className="card__input__background__text">{word}</span>
          </span>
          <Input
            wordLen={word.length}
            setWord={setInnerWord}
            setNextButton={setNextButton}
            completed={completed}
            defaultVal={defaultVal}
            setDefaultVal={setDefaultVal}
          />
        </span>
        <div key={word} className="card__grid">
          <div className="card__grid__text">
            {hasTranslation && <div className="card__translate">{wordTranslate}</div>}
            {hasExample && <div className="card__sentence"><ReplaceBrackets text={textExample} completed={completed} word={word} /></div>}
            {hasExample && completed && autoTranslationLocal && <div className="card__ruSentence">{textExampleTranslate}</div>}
            {hasMeaning && <div className="card__sentence"><ReplaceBrackets text={textMeaning} completed={completed} word={word} /></div>}
            {hasMeaning && completed && autoTranslationLocal && <div className="card__ruSentence">{textMeaningTranslate}</div>}
          </div>
          <div className="card__grid__beauty">
            {hasImage && <img src={getUrlData(image)} alt={word} className="card__image" />}
            {hasTranscription && <div className="card__transcription">{transcription}</div>}
          </div>
        </div>
        <audio id="card-audio" autoPlay>
          <track kind="captions" />
        </audio>
        {hasAutoTranslation && (
        <div
          className={`card__translation-button ${autoTranslationLocal ? '' : 'card__translation-button-disable'}`}
          onMouseUpCapture={() => setAutoTranslationLocal(!autoTranslationLocal)}
        />
        )}
        {hasAutoSpeech && (
        <div
          className={`card__audio-button ${autoSpeechLocal ? '' : 'card__audio-button-disable'}`}
          onMouseUpCapture={() => setAutoSpeechLocal(!autoSpeechLocal)}
        />
        )}
        {hasDelete && <button type="button" className="card__button">Удалить</button>}
        {hasDifficult && <button type="button" className="card__button">Сложное</button>}
        <button
          type="button"
          className="card__button card__button-show"
          onClick={() => {
            checkWord();
            if ((!hasAutoSpeech || !autoSpeechLocal) && completed) {
              changeSlide(setDoneCards, swiper, setAddSlide);
            }
          }}
        >
          {hasShowingAnswer && !nextButton ? 'Показать ответ' : 'Далее'}
        </button>
      </div>
    </div>
  );
};

Card.propTypes = {
  setDoneCards: PropTypes.func.isRequired,
  setAddSlide: PropTypes.func.isRequired,
  swiper: PropTypes.shape({
    slideNext: PropTypes.func,
    activeIndex: PropTypes.number,
  }),
  word: PropTypes.shape({
    word: PropTypes.string,
    image: PropTypes.string,
    wordTranslate: PropTypes.string,
    textExample: PropTypes.string,
    textExampleTranslate: PropTypes.string,
    textMeaning: PropTypes.string,
    textMeaningTranslate: PropTypes.string,
    transcription: PropTypes.string,
    audio: PropTypes.string,
    audioMeaning: PropTypes.string,
    audioExample: PropTypes.string,
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
    hasShowingAnswer: PropTypes.bool.isRequired,
    // hasIntervalButtons: PropTypes.bool.isRequired,
  }).isRequired,
  autoTranslationLocal: PropTypes.bool.isRequired,
  setAutoTranslationLocal: PropTypes.func.isRequired,
  autoSpeechLocal: PropTypes.bool.isRequired,
  setAutoSpeechLocal: PropTypes.func.isRequired,
};

Card.defaultProps = {
  word: {
    word: 'run',
    image: './assets/images/run.jpg',
    wordTranslate: 'Бежать, бегать',
    textExample: 'I <b>run</b> every morning.',
    textExampleTranslate: 'Я бегаю каждое утро',
    textMeaning: '<i>Run</i> - moving fast.',
    textMeaningTranslate: 'Бежать - двигаться быстро',
    transcription: '[RAN]',
    audio: 'files/01_0002.mp3',
    audioMeaning: 'files/01_0002_meaning.mp3',
    audioExample: 'files/01_0002_example.mp3',
  },
  swiper: {},
};

export default Card;
