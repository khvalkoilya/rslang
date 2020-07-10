import React from 'react';
import PropTypes from 'prop-types';
import './_speakLt.scss';

const SpeakIt = ({
  words,
  showAdditionalInfo,
  recognize,
  repeat,
  spokenWord,
  actualWord,
}) => {
  const btn = words.map((e) => (
    <button
      key={e.id}
      className={`words-btn ${e.guessed && 'correct'}`}
      type="button"
      onClick={() => showAdditionalInfo(e)}
    >
      <div className="word">{e.word}</div>
      <div className="transcription">{e.transcription}</div>
      <img className="speaker" src="./assets/images/speaker.svg" alt="speaker" />
    </button>
  ));

  const btnsLevel = () => (
    Array.from({ length: 5 }, (e, i) => i).map((e) => (
      <button
        key={e}
        className="btn-level"
        type="button"
        onClick={() => {}}
        aria-label={e}
      />
    ))
  );

  return (
    <div className="wrapper">
      <div className="level-wrapper">
        {btnsLevel()}
      </div>
      <div>{spokenWord}</div>
      <div className="img">
        {
          actualWord
          && (
          <img
            src={`https://raw.githubusercontent.com/AndreyAmelchenia/rslang-data/master/${actualWord.image}`}
            alt={actualWord.image}
          />
          )
        }
        <div>{actualWord ? actualWord.wordTranslate : ''}</div>
      </div>
      <div className="words-wrapper">
        {btn}
      </div>
      <div className="btn-wrapper">
        <button
          className="repeat"
          type="button"
          onClick={repeat}
        >
          Повторить
        </button>
        <button
          className="speech"
          type="button"
          onClick={recognize}
        >
          Проговорить
        </button>
        <button className="result" type="button" onClick={() => console.log('Результаты')}>Результаты</button>
      </div>
    </div>
  );
};

SpeakIt.propTypes = {
  words: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  showAdditionalInfo: PropTypes.func.isRequired,
  repeat: PropTypes.func.isRequired,
  recognize: PropTypes.func.isRequired,
  spokenWord: PropTypes.string,
  actualWord: PropTypes.shape({
    wordTranslate: PropTypes.string,
    image: PropTypes.string,
  }),
};

SpeakIt.defaultProps = {
  spokenWord: '',
  actualWord: {
    wordTranslate: '',
    image: '',
  },
};

export default SpeakIt;
