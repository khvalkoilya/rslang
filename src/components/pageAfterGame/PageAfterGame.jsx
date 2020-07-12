import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Timer from '../timer/Timer';

const PageAfterGame = ({
  title, score, toggle, setCorrect,
}) => {
  const [visibleTimer, setVisibleTimer] = useState(false);
  const [buttonActivity, setButtonActivity] = useState(false);

  const repeatGame = () => {
    setVisibleTimer(!visibleTimer);
    setButtonActivity(!buttonActivity);
    setCorrect(0);
  };

  return (
    <div className="content">
      <h3>{title}</h3>
      <div className="scoreInfoField">
        Ваш результат
        <p className="score">{score}</p>
        из 10!
      </div>
      <div className="timer">{visibleTimer && <Timer initTime={5} toggle={toggle} />}</div>
      <button
        onClick={() => repeatGame()}
        type="button"
        className="btn"
        disabled={buttonActivity}
      >
        Повторить

      </button>
    </div>
  );
};

PageAfterGame.propTypes = {
  title: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  toggle: PropTypes.func.isRequired,
  setCorrect: PropTypes.func.isRequired,
};

export default PageAfterGame;
