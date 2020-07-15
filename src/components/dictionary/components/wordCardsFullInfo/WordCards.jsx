import React from 'react';
import PropTypes from 'prop-types';

import { getUrlData } from '../../../../utilsApi/utilsApi';
import playAudio from '../../../speakerWord/playAudio';
import sliceBrackets from '../sliceBrackets';

const WordCards = ({ element, optional }) => (
  <div className="cardContent">
    <div className="wordCard">
      <div className="textContent">
        <div className="wordInfo">
          <div className="word">
            <h3 className="wordText">
              {element.word}
            </h3>
            <button type="button" onClick={() => playAudio(element.audio)} className="audioButton">
              <img src="../../../assets/images/speaker.svg" alt="audioIco" className="audioIco" />
            </button>
          </div>
          <p className="wordTranscription">{element.transcription}</p>
        </div>
        <p className="wordTranslate">{element.wordTranslate}</p>
        <p className="sentenceExmaple">
          {sliceBrackets(element.textExample)}
        </p>
      </div>
      <div className="pictureContent"><img src={getUrlData(element.image)} alt="wordPic" className="wordPic" /></div>
    </div>
    <div className="blockRepeat">
      <div className="infoRepeat">
        {optional.repeat === 0 ? 'New' : `Повторений: ${optional.repeat}`}
      </div>
      <div className="infoRepeat">
        Последнее:
        {optional.data}
      </div>
      <div className="infoRepeat">
        Следующее:
        {' '}
        {'завтра'}
      </div>
    </div>
    <div className="line" />
  </div>
);

WordCards.propTypes = {
  element: PropTypes.objectOf(PropTypes.any).isRequired,
  optional: PropTypes.objectOf(PropTypes.any).isRequired,
};
export default WordCards;
