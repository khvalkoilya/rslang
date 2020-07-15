import React, { useState, useContext } from 'react';

import Timer from '../timer/Timer';

import ApplicationData from '../context/Context';

const Sprint = () => {
  const { words } = useContext(ApplicationData);

  const [level, setLevel] = useState(0);

  const [score, setScore] = useState(0);

  const [currentWord, setCurrentWord] = useState(0);

  const [correctAnswers, setCorrectAnswers] = useState(0);

  const [timerPlace, setTimerPlace] = useState('60');

  const [gameStatus, setGameStatus] = useState('game-hello');

  const randomWord = (x) => {
    const rand = Math.floor(Math.random() * (2));
    if (rand === 0) {
      return words[x].wordTranslate;
    }
    const secondWord = Math.floor(Math.random() * (words.length));
    return words[secondWord].wordTranslate;
  };

  let wordsArray = words.map((item, index) => [item.word, item.wordTranslate, randomWord(index)]);

  const itsErrorAnswer = () => {
    setCorrectAnswers(0);
    setLevel(0);
  };

  const itsTrueAnswer = () => {
    setCorrectAnswers(correctAnswers + 1);

    if (level === 0) {
      setScore(score + 10);

      setLevel(1);
      setCorrectAnswers(0);
    }

    if (level === 1) {
      setScore(score + 10);
      if (correctAnswers === 2) {
        setLevel(2);
        setCorrectAnswers(0);
      }
    }

    if (level === 2) {
      setScore(score + 40);
      if (correctAnswers === 2) {
        setLevel(3);
        setCorrectAnswers(0);
      }
    }

    if (level === 3) {
      setScore(score + 80);
    }
  };

  const endGame = () => setGameStatus('game-end');

  const gameStep = (e) => {
    if (timerPlace === '60') {
      setTimerPlace(<Timer initTime={60} toggle={endGame} />);
    }

    const myAnswer = e.target.attributes.answer.value;

    if (myAnswer === 'yes') {
      if (wordsArray[currentWord][2] === wordsArray[currentWord][1]) {
        itsTrueAnswer();
      } else {
        itsErrorAnswer();
      }
    } else if (wordsArray[currentWord][2] !== wordsArray[currentWord][1]) {
      itsTrueAnswer();
    } else {
      itsErrorAnswer();
    }

    setCurrentWord(currentWord + 1);

    if (wordsArray.length - 1 === currentWord) {
      setCurrentWord(1);
    }
  };

  const sprintGameStart = () => {
    wordsArray = words.map((item, index) => [item.word, item.wordTranslate, randomWord(index)]);

    setGameStatus('game-start');

    setTimerPlace('60');
    setCurrentWord(0);
    setCorrectAnswers(0);
    setLevel(0);
    setScore(0);
  };

  return (
    <div className="card card--sprint-game-bg">
      <div className={gameStatus}>
        <div className="sprint-game">

          <div className="sprint-game__header">
            <div className="sprint-game__points">
              {score}
            </div>

            <div className="sprint-game__level">
              Уровень:
              {' '}
              {level}
            </div>

            <div className="sprint-game__timer">
              {timerPlace}
            </div>
          </div>
          <div className="sprint-game__words">
            <p className="sprint-game__english-word">
              {wordsArray[currentWord][0]}
            </p>
            <p className="sprint-game__russian-word">
              {wordsArray[currentWord][2]}
            </p>
          </div>
          <div className="sprint-game__control">
            <button onClick={gameStep} className="sprint-game__button sprint-game__button--no" type="button" answer="no">Не верно</button>

            <button onClick={gameStep} className="sprint-game__button sprint-game__button--yes" type="button" answer="yes">Верно</button>

          </div>

        </div>

        <div className="sprint-hello">
          <div>
            <p>
              Спринт
            </p>
            <p className="sprint-hello__description">
              На нулевом уровне за правильный ответ Вы получаете 10 очков
              и сразу переходите на первый уровень.
            </p>
            <p className="sprint-hello__description">
              На первом уровне за правильный ответ Вы получаете 10 очков.
              Для перехода на следующий уровень нужно дать три правильных ответа.
            </p>
            <p className="sprint-hello__description">
              На втором уровне за правильный ответ Вы получаете 40 очков.
              Для перехода на следующий уровень нужно дать три правильных ответа.
            </p>
            <p className="sprint-hello__description">
              На третьем уровне за правильный ответ Вы получаете 80 очков.
            </p>
            <p className="sprint-hello__description">
              Неправильный ответ сбросит Вас на нулевой уровень.
            </p>

            <button
              type="button"
              className="sprint-game__button"
              onClick={sprintGameStart}
            >
              Начать игру
            </button>
          </div>
        </div>

        <div className="sprint-end">
          <p>Время закончилось!</p>
          <p>
            Вы набрали
            {' '}
            {score}
            {' '}
            очков
          </p>

          <button type="button" className="sprint-game__button" onClick={sprintGameStart}>Начать новую игру</button>
        </div>

      </div>
    </div>

  );
};

export default Sprint;
