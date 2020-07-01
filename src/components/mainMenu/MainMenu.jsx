import React from 'react';
import PropTypes from 'prop-types';
import { MAIN_MENU_ITEMS_VALUES } from '../../variables/menuVariables';
import MainMenuItem from '../mainMenuItem/MainMenuItem';

const MainMenu = ({ isAuth }) => {
  const menuList = MAIN_MENU_ITEMS_VALUES.map((word) => (
    <MainMenuItem
      name={word.name}
      id={word.id}
      key={word.id}
      isAuthorized={word.isAuthorized}
      isAuth={isAuth}
      props={word.props}
      lock={word.lock}
      icon={word.icon}
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
