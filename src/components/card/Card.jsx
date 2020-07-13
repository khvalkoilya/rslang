import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import Input from '../input/Input';
import getLetterArr from './getLetterArr';
import GetPlaceholder from './GetPlaceholder';
import ReplaceBrackets from './ReplaceBrackets';
import { getUrlData } from '../../utilsApi/utilsApi';
import cardAutoSpeech from './cardAutoSpeech';
import changeSlide from './changeSlide';
import updateOptionWord from './utils';
import ApplicationData from '../context/Context';
import StudyProgress from './StudyProgress';

const Card = ({
  swiper, setDoneCards,
  word: {
    id,
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
    userWord,
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
    hasIntervalButtons,
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
  const [isPlaying, setIsPlaying] = useState(false);

  const {
    words, setWords, userId, isAuth,
  } = useContext(ApplicationData);

  const updateBackEnd = (type) => {
    if (isAuth) {
      updateOptionWord(words, id, type, setDoneCards, setWords, userId);
    }
  };

  // const IntervalButtons = (type, name) => (
  //   <>
  //     {hasIntervalButtons && !skip && completed && (
  //     <button
  //       type="button"
  //       onClick={() => {
  //         updateBackEnd(type);
  //         changeSlide(setDoneCards, swiper);
  //       }}
  //       className={`card__button card__button-interval
  //         ${isPlaying ? 'card__button-disable' : ''}`}
  //     >
  //       {name}
  //     </button>
  //     )}
  //   </>
  // );

  const checkWord = (enter = false) => {
    setDefaultVal(getLetterArr(word, innerWord.toLowerCase()));
    const active = document.querySelector('.swiper-slide-active');
    const input = active.querySelector('.card__input');
    input.value = '';
    let localSkip = false;
    if (hasShowingAnswer && !nextButton && !enter) {
      localSkip = true;
      setSkip(localSkip);
      updateBackEnd('showAnswer');
    }
    if (word.toLowerCase() === innerWord.toLowerCase() || localSkip) {
      setCompleted(true);
      input.classList.add('card-none');
      setNextButton(true);
      if (!localSkip) {
        updateBackEnd('levelRepeat');
      }
      cardAutoSpeech(audio, audioExample, audioMeaning, hasAutoSpeech, autoSpeechLocal,
        hasTranslation, hasExample, hasMeaning, setIsPlaying);
    } else {
      updateBackEnd('error');
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
        {isAuth && <StudyProgress current={userWord.optional.levelRepeat} level={userWord.optional.level} />}
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
            {hasExample && completed && autoTranslationLocal && hasAutoTranslation && <div className="card__ruSentence">{textExampleTranslate}</div>}
            {hasMeaning && <div className="card__sentence"><ReplaceBrackets text={textMeaning} completed={completed} word={word} /></div>}
            {hasMeaning && completed && autoTranslationLocal && hasAutoTranslation && <div className="card__ruSentence">{textMeaningTranslate}</div>}
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
        <div className={`card__button__grid ${completed && hasIntervalButtons ? 'card__button__grid-interval' : ''}`}>
          <div>
            {hasDelete && !completed && <button type="button" onClick={() => updateBackEnd('delete')} className="card__button">Удалить</button>}
            {hasDifficult && !completed && <button type="button" onClick={() => updateBackEnd('complicated')} className="card__button">Сложное</button>}
            {/* <IntervalButtons type="again" name="Снова" key={4} /> */}
            {hasIntervalButtons && !skip && completed && <button type="button" onClick={() => { updateBackEnd('easy'); changeSlide(setDoneCards, swiper); }} className={`card__button card__button-interval ${isPlaying ? 'card__button-disable' : ''}`}>Легко</button>}
            {hasIntervalButtons && !skip && completed && <button type="button" onClick={() => { updateBackEnd('good'); changeSlide(setDoneCards, swiper); }} className={`card__button card__button-interval ${isPlaying ? 'card__button-disable' : ''}`}>Средне</button>}
            {hasIntervalButtons && !skip && completed && <button type="button" onClick={() => { updateBackEnd('hard'); changeSlide(setDoneCards, swiper); }} className={`card__button card__button-interval ${isPlaying ? 'card__button-disable' : ''}`}>Сложно</button>}
            {hasIntervalButtons && !skip && completed && <button type="button" onClick={() => { updateBackEnd('again'); changeSlide(setDoneCards, swiper); }} className={`card__button card__button-interval ${isPlaying ? 'card__button-disable' : ''}`}>Снова</button>}
          </div>
          <div>
            {completed && (
            <button
              type="button"
              onClick={() => changeSlide(setDoneCards, swiper)}
              className={`card__button card__button-next ${isPlaying ? 'card__button-disable' : ''}`}
            >
              Продолжить
            </button>
            )}
            {!completed && (
            <button
              type="button"
              className="card__button card__button-show"
              onClick={() => {
                checkWord();
              }}
            >
              {hasShowingAnswer && !nextButton ? 'Показать ответ' : 'Далее'}
            </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  setDoneCards: PropTypes.func.isRequired,
  swiper: PropTypes.shape({
    slideNext: PropTypes.func,
    activeIndex: PropTypes.number,
  }),
  word: PropTypes.shape({
    id: PropTypes.string,
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
    userWord: PropTypes.shape({
      difficulty: PropTypes.string,
      optional: PropTypes.shape({
        data: PropTypes.string,
        repeat: PropTypes.number,
        level: PropTypes.string,
        levelRepeat: PropTypes.number,
        error: PropTypes.string,
      }),
    }),
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
    hasIntervalButtons: PropTypes.bool.isRequired,
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
    userWord: {
      difficulty: 'again',
      optional: {
        data: 0,
        repeat: 0,
        level: 'good',
        levelRepeat: 0,
        error: 0,
      },
    },
  },
  swiper: {},
};

export default Card;
