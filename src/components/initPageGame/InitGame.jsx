import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Timer from '../timer/Timer';

const InitPage = ({
  title, briefInfo, toggle,
}) => {
  const [visibleTimer, setVisibleTimer] = useState(false);
  const [buttonActivity, setButtonActivity] = useState(false);

  const buttonAction = () => {
    setVisibleTimer(!visibleTimer);
    setButtonActivity(!buttonActivity);
  };

  return (
    <div className="content">
      <h3>{title}</h3>
      <p className="briefInfo">{briefInfo}</p>
      <div className="timer">{visibleTimer && <Timer initTime={5} toggle={toggle} />}</div>
      <button
        onClick={() => buttonAction()}
        type="button"
        className="btn"
        disabled={buttonActivity}
      >
        Начать
      </button>
    </div>
  );
};

InitPage.propTypes = {
  title: PropTypes.string.isRequired,
  briefInfo: PropTypes.string.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default InitPage;
