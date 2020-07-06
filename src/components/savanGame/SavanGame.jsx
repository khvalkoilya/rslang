import React, { useState, useEffect } from 'react';
import InitPage from './component/initGame/InitGame';
import NewGame from './component/duringGame/DuringGame';

import './_savanGame.scss';

const SavanGame = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [timer, setTimer] = useState(3);
  const [renderGame, setRenderGame] = useState(false);

  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const [numberAttempts, setNumberAttempts] = useState(0);

  useEffect(() => {
    let interval = null;
    if (isPlaying) {
      if (timer > 0) {
        interval = setInterval(() => {
          setTimer(timer - 1);
        }, 1000);
      } else {
        clearInterval(interval);
        setRenderGame(true);
      }
    }
    return () => clearInterval(interval);
  });

  return (
    <div className="game-content">
      {renderGame ? (
        <NewGame
          setCorrect={setCorrect}
          correct={correct}
          setIncorrect={setIncorrect}
          incorrect={incorrect}
          numberAttemptsPlusOne={setNumberAttempts}
          numberAttempts={numberAttempts}
          setRenderGame={setRenderGame}
          renderGame={renderGame}
        />
      ) : <InitPage isPlaying={isPlaying} setIsPlaying={setIsPlaying} timer={timer} />}
    </div>
  );
};

export default SavanGame;
