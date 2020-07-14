import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Timer = ({ initTime, toggle }) => {
  const [timer, setTimer] = useState(initTime);

  useEffect(() => {
    let interval = null;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);
    } else {
      toggle();
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  });

  return <div>{timer}</div>;
};

Timer.propTypes = {
  initTime: PropTypes.number.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default Timer;
