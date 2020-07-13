import React, { useState, useEffect } from 'react';

const Timer = ({ initTime, handler }) => {
  const [timer, setTimer] = useState(initTime);

  useEffect(() => {
    let interval = null;
    if (timer > 0) {
      interval = setInterval(() => {
        console.log(timer);
        setTimer(timer - 1);
      }, 1000);
    } else {
      console.log('таймер на нуле, нужно останавливать игру');
      handler();

      clearInterval(interval);
    }

    return () => clearInterval(interval);
  });

  return <div>{timer}</div>;
};

export default Timer;
