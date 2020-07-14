import React, { useState } from 'react';

import Timer from '../timer/Timer';

import words from '../../variables/defaultWords';

// https://youtu.be/ynmb9pb2mUs

const Sprint = () => {
  const [level, setLevel] = useState(0);

  const [score, setScore] = useState(0);

  const [currentWord, setCurrentWord] = useState(0);

  const [correctAnswers, setCorrectAnswers] = useState(0);

  const [timerPlace, setTimerPlace] = useState('60');

  const [gameStatus, setGameStatus] = useState('game-hello');

  // функция для генерации неправильного перевода к английскому слову
  const randomWord = (x) => {
    const rand = Math.floor(Math.random() * (2));
    if (rand === 0) {
      return words[x].wordTranslate;
    }
    const secondWord = Math.floor(Math.random() * (words.length));
    return words[secondWord].wordTranslate;
  };

  // массив со словами
  let wordsArray = words.map((item, index) => [item.word, item.wordTranslate, randomWord(index)]);

  const itsErrorAnswer = () => {
    console.log('не угадали, ошибка');
    setCorrectAnswers(0);
    setLevel(0);
  };

  const itsTrueAnswer = () => {
    console.log('правильный ответ!');
    setCorrectAnswers(correctAnswers + 1);
    console.log('правильных ответов подряд:', correctAnswers);

    if (level === 0) {
      setScore(score + 10);

      setLevel(1);
      setCorrectAnswers(0);
    }

    if (level === 1) {
      setScore(score + 20);
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

  // нажатие на кнопку
  const gameStep = (e) => {
    if (timerPlace === '60') {
      setTimerPlace(<Timer initTime={60} handler={endGame} />);
    }

    let myAnswer;

    if (e.target.attributes.answer.value === 'yes' || e.target.attributes.answer.value === 'no') {
      myAnswer = e.target.attributes.answer.value;
    } else {
      myAnswer = e;
    }

    if (myAnswer === 'yes') {
      console.log('нажали на кнопку да');
      if (wordsArray[currentWord][2] === wordsArray[currentWord][1]) {
        itsTrueAnswer();
      } else {
        itsErrorAnswer();
      }
    } else {
      console.log('нажали на кнопку нет');
      if (wordsArray[currentWord][2] !== wordsArray[currentWord][1]) {
        itsTrueAnswer();
      } else {
        itsErrorAnswer();
      }
    }

    setCurrentWord(currentWord + 1);

    if (wordsArray.length - 1 === currentWord) {
      console.log('мы в конце массива');
      setCurrentWord(1);
    }
  };

  document.addEventListener('keyup', (e) => {
    e.preventDefault();
    if (e.code === 'ArrowLeft') {
      gameStep('no');
    }
    if (e.code === 'ArrowRight') {
      gameStep('yes');
    }
  });

  const sprintGameStart = () => {
    wordsArray = words.map((item, index) => [item.word, item.wordTranslate, randomWord(index)]);

    setGameStatus('game-start');

    setTimerPlace('60');
    setCurrentWord(0);
    setCorrectAnswers(0);
    setLevel(0);
    setScore(0);

    console.log(wordsArray);
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

          {/* экран приветствия */}

        </div>

        <div className="sprint-hello">
          <div>
            <p>
              Спринт
            </p>
            <p>
              В игре есть несколько уровней. За первый правильный ответ ты получаешь 10 баллов и переходишь с нулевого на первый уровень. Здесь за каждый
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
