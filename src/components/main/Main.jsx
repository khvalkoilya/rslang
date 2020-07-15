import React, { useContext } from 'react';
import ApplicationData from '../context/Context';
import {
  USER_MENU_ITEMS, MAIN_MENU_ITEMS_VALUES, ABOUT_AS, SHORT_STATISTICS,
} from '../../variables/MenuVariables';
import GAMES_VARIABLES from '../../variables/GamesVariables';

const Main = () => {
  const main = USER_MENU_ITEMS
    .concat(MAIN_MENU_ITEMS_VALUES)
    .concat(ABOUT_AS)
    .concat(GAMES_VARIABLES)
    .concat(SHORT_STATISTICS);
  const { page } = useContext(ApplicationData);
  return (
    <main className="main">
      {main.map((element) => page === element.title && element.render(element.id, element.title))}
    </main>
  );
};

export default Main;
