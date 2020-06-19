import React, { useState } from 'react';
import MainMenuItemsValues from '../../variables/MainMenuItemsName';
import MainMenuItem from '../mainMenuItem/MainMenuItem';

const isAuth = false;

const MainMenu = () => {
  const startPage = isAuth ? 0 : 2;
  const [actualPage, setActualPage] = useState(startPage);

  const setUnderlined = (e) => e === actualPage;

  const setPage = (id) => setActualPage(id);

  const menuList = MainMenuItemsValues.map((word) => (
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
