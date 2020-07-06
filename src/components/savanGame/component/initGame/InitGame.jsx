import React from 'react';
import PropTypes from 'prop-types';

import './_initGame.scss';

const InitPage = (props) => (
  <div className="content">
    <h3>САВАННА</h3>
    <p>Тренировка Саванна развивает словарный запас.</p>
    <div className="timerBeforeGame">{{ ...props }.isPlaying && { ...props }.timer}</div>
    <button onClick={() => props.setIsPlaying(!props.isPlaying)} type="button" className="btn">Начать</button>
  </div>
);

InitPage.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  setIsPlaying: PropTypes.func.isRequired,
};

export default InitPage;
