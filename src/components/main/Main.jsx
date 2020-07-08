import React, { useContext } from 'react';
import ChangePage from '../context/Context';
import { USER_MENU_ITEMS, MAIN_MENU_ITEMS_VALUES } from '../../variables/MenuVariables';

const Main = () => {
  const main = USER_MENU_ITEMS.concat(MAIN_MENU_ITEMS_VALUES);
  const { page } = useContext(ChangePage);
  return (
    <main className="main">
      {main.map((element) => page === element.title && element.render(element.id, element.title))}
    </main>
  );
};

export default Main;
