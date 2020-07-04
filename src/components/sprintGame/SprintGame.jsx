import React, { useState } from 'react';
import words from '../../variables/defaultWords';

// https://youtu.be/ynmb9pb2mUs

function Sprint() {
  const [seconds, setSeconds] = useState(10);

  const [level, setLevel] = useState(0);

  const [score, setScore] = useState(0);

  const [currentWord, setCurrentWord] = useState([]);

  function randomWord(x) {
    const rand = Math.floor(Math.random() * (2));
    if (rand === 0) {
      return words[x].wordTranslate;
    }
    const secondWord = Math.floor(Math.random() * (words.length));
    console.log(secondWord);
    return words[secondWord].wordTranslate;
  }

  const wordsArray = words.map((item, index) => [item.word, item.wordTranslate, randomWord(index)]);

  const endGame = () => {
    console.log('заканчиваем игру');
  };

  const gameStep = () => {
    console.log(wordsArray);
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
          кошка
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
