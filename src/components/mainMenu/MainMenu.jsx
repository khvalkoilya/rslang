import React from 'react';
import PropTypes from 'prop-types';
import { MAIN_MENU_ITEMS_VALUES } from '../../variables/menuVariables';
import MainMenuItem from '../mainMenuItem/MainMenuItem';

const MainMenu = ({ isAuth, isNavVisible }) => {
  const menuList = MAIN_MENU_ITEMS_VALUES.map((word) => (
    <MainMenuItem
      name={word.name}
      id={word.id}
      key={word.id}
      isAuthorized={word.isAuthorized}
      isAuth={isAuth}
      isNavVisible={isNavVisible}
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
  isNavVisible: PropTypes.func.isRequired,
};

export default MainMenu;
