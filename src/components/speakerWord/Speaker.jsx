import React from 'react';
import PropTypes from 'prop-types';

import playAudio from './playAudio';

const Speaker = ({ word }) => (
  <>
    <div className="blackWithbtnSpeaker">
      <button
        type="button"
        className="btnSpeaker animate"
        onClick={() => playAudio(word)}
      >
        <img src="./assets/images/speaker.svg" alt="speakerButton" className="btnSpeakerImg" />
      </button>
    </div>
  </>
);

Speaker.propTypes = {
  word: PropTypes.string.isRequired,
};

export default Speaker;
