import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { MAIN_MENU_ITEMS_VALUES } from '../../variables/menuVariables';
import MainMenuItem from '../mainMenuItem/MainMenuItem';

const MainMenu = ({ isAuth }) => {
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
      setPages={setPage}
      isAuth={isAuth}
      props={word.props}
    />
  ));

  return (
    <>
      {menuList}
    </>
  );
};

MainMenu.propTypes = {
  isAuth: PropTypes.bool.isRequired,
};

export default MainMenu;
