import React, { useState, useContext } from 'react';
import ApplicationData from '../context/Context';

import InitPage from '../initPageGame/InitGame';
import NewGame from './component/duringGame/DuringAudioCallGame';
import PageAfterGame from '../pageAfterGame/PageAfterGame';

import { getRandomWord } from '../shuffleArray/shuffle';

import playAudio from '../speakerWord/playAudio';

const AudioCallGame = () => {
  const { wordsNew, wordsAgain } = useContext(ApplicationData);
  const [isPlaying, setIsPlaying] = useState('initGame');

  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const [numberAttempts, setNumberAttempts] = useState(0);

  const [randomWord, setRandomWord] = useState(getRandomWord(wordsNew.concat(wordsAgain)));

  const pageAfterGame = () => {
    if (isPlaying === 'newGame') {
      return (
        <NewGame
          setCorrect={setCorrect}
          correct={correct}
          setIncorrect={setIncorrect}
          incorrect={incorrect}
          setNumberAttempts={setNumberAttempts}
          numberAttempts={numberAttempts}
          setIsPlaying={setIsPlaying}
          randomWord={randomWord}
          setRandomWord={setRandomWord}
        />
      );
    }

    if (isPlaying === 'initGame') {
      return (
        <InitPage
          title="Аудиовызов"
          briefInfo="Эта игра поможет улучшить Ваше понимание английской речи"
          toggle={() => { setIsPlaying('newGame'); playAudio(randomWord.audio); }}
        />
      );
    }

    if (isPlaying === 'afterGame') {
      return (
        <PageAfterGame
          title="Аудиовызов"
          score={correct}
          toggle={() => { setIsPlaying('newGame'); playAudio(randomWord.audio); }}
          setCorrect={setCorrect}
        />
      );
    }

    return (
      <>
      </>
    );
  };

  return (
    <div className="game-content audioCallGameContent">
      {pageAfterGame()}
    </div>
  );
};

export default AudioCallGame;
