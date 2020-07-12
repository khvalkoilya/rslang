import React, { useContext } from 'react';
import GAMES_VARIABLES from '../../variables/GamesVariables';
import ApplicationData from '../context/Context';

const GamesPage = () => {
  const { setPage } = useContext(ApplicationData);
  return (
    <div className="games-page">
      {GAMES_VARIABLES.map((element) => (
        <div key={element.id} className="games-page__block">
          <h2 className="games-page__heading">{element.title}</h2>
          <button type="button" onClick={() => setPage(element.title)} className="game-page__image-block">
            <img className="game-page__image" src={element.icon} alt="game SpeackIt" />
          </button>
        </div>
      )) }

    </div>
  );
};

export default GamesPage;
