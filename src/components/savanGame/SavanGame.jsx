import React, { useState } from 'react';
import InitPage from '../initPageGame/InitGame';
import NewGame from './component/duringGame/DuringGame';
import PageAfterGame from '../pageAfterGame/PageAfterGame';

const SavanGame = () => {
  const [isPlaying, setIsPlaying] = useState('initGame');
  const [timer] = useState(5);

  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const [numberAttempts, setNumberAttempts] = useState(0);

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
        />
      );
    }

    if (isPlaying === 'initGame') {
      return (
        <InitPage
          title="Саванна"
          briefInfo="Эта игра поможет улучшить Ваш словарный запас"
          timer={timer}
          toggle={() => setIsPlaying('newGame')}
        />
      );
    }

    if (isPlaying === 'afterGame') {
      return (
        <PageAfterGame
          title="Саванна"
          score={correct}
          timer={timer}
          toggle={() => setIsPlaying('newGame')}
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
    <div className="game-content">
      {pageAfterGame()}
    </div>
  );
};

export default SavanGame;
