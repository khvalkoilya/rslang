import React, { useState } from 'react';
import { MAIN_MENU_ITEMS_VALUES } from '../../variables/menuVariables';
import MainMenuItem from '../mainMenuItem/MainMenuItem';

const isAuth = true;

const MainMenu = () => {
  const startPage = isAuth ? 0 : 2;
  const [actualPage, setActualPage] = useState(startPage);

  const setUnderlined = (e) => e === actualPage;

  const setPage = (id) => setActualPage(id);

  const menuList = MAIN_MENU_ITEMS_VALUES.map((word) => (
    <MainMenuItem
      name={word.name}
      isUnderlined={setUnderlined(word.id)}
      id={word.id}
      key={word.id}
      isAuthorized={word.isAuthorized}
      setPage={setPage}
      isAuth={isAuth}
    />
  ));

  return (
    <div>
      {menuList}
    </div>
  );
};

export default MainMenu;