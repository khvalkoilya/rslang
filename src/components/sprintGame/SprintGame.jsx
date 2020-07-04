import React, { useState } from 'react';
import words from '../../variables/defaultWords';

// https://youtu.be/ynmb9pb2mUs

function Sprint() {
  const [seconds, setSeconds] = useState(60);

  const [level, setLevel] = useState(0);

  const [score, setScore] = useState(0);

  const [currentWord, setCurrentWord] = useState([]);

  const gameStep = () => {
    console.log('нажали на кнопку');
    if (level === 0) {
      setLevel(1);
      startTimer();
      setLevel(level + 1);
    }
  };

  const startTimer = () => {
    const x = seconds - 1;
    if (x === 0) {
      endGame();
    } else {
      setInterval(() => {
        console.log(x);
        setSeconds(x);
      }, 1000);
    }
  };

  return (
    <div className="sprint-game">
      <div className="sprint-game__header">
        <div className="sprint-game__points">
          {score}
        </div>

        <div className="sprint-game__level">
          {level}
        </div>

        <div className="sprint-game__timer">
          {seconds}
        </div>
      </div>
      <div className="sprint-game__words">
        <p className="sprint-game__english-word">
          Cat
        </p>
        <p className="sprint-game__russian-word">
          Кошка
        </p>
      </div>
      <div className="sprint-game__control">
        <button onClick={gameStep} className="sprint-game__button sprint-game__button--no" type="button">Нет</button>
        <button onClick={gameStep} className="sprint-game__button sprint-game__button--yes" type="button">Да</button>
      </div>

    </div>
  );
}

export default Sprint;
