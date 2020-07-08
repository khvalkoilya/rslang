import React, { useState, useEffect } from 'react';

import Timer from '../timer/Timer';

import words from '../../variables/defaultWords';

// https://youtu.be/ynmb9pb2mUs

const Sprint = () => {
  // const [seconds, setSeconds] = useState(10);

  const [level, setLevel] = useState(0);

  const [score, setScore] = useState(0);

  const [currentWord, setCurrentWord] = useState(0);

  const [isError, setIsError] = useState(0);

  const [correctAnswers, setCorrectAnswers] = useState(0);

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
  const wordsArray = words.map((item, index) => [item.word, item.wordTranslate, randomWord(index)]);

  // функция окончания игры
  const endGame = () => {
    console.log('заканчиваем игру');
  };

  const itsErrorAnswer = () => {
    console.log('не угадали, ошибка');
    setIsError(1);
    setCorrectAnswers(0);
    setLevel(0);
  };

  const itsTrueAnswer = () => {
    console.log('правильный ответ!');
    setIsError(0);
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

  // нажатие на кнопку
  const gameStep = (e) => {
    console.log(wordsArray);
    if (e.target.attributes.answer.value === 'yes') {
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
  };

  return (
    <div className="sprint-game">
      <div className="sprint-game__header">
        <div className="sprint-game__points">
          Очки:
          {' '}
          {score}
        </div>

        <div className="sprint-game__level">
          Уровень:
          {' '}
          {level}
        </div>

        <div className="sprint-game__timer">
          <Timer initTime={60} />
        </div>
      </div>
      <div className="sprint-game__words">
        <p className="sprint-game__english-word">
          {wordsArray[currentWord][0]}
          {console.log(wordsArray[currentWord][2])}
        </p>
        <p className="sprint-game__russian-word">
          {wordsArray[currentWord][2]}
        </p>
      </div>
      <div className="sprint-game__control">
        <button onClick={gameStep} className="sprint-game__button sprint-game__button--no" type="button" answer="no">Нет</button>

        <button onClick={gameStep} className="sprint-game__button sprint-game__button--yes" type="button" answer="yes">Да</button>
      </div>

    </div>
  );
};

export default Sprint;
