import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import MainMenuItemsValues from '../../variables/MainMenuItemsName';
import './MainMenuItem.scss';

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
    />
  ));

  return (
    <div>
      {menuList}
    </div>
  );
};

const MainMenuItem = ({
  name, isUnderlined, id, isAuthorized, setPage,
}) => (
  <button
    type="button"
    onClick={isAuth ? useCallback(() => {
      setPage(id);
    }, []) : null}
    className={`menu-item ${isUnderlined ? 'menu-item-active' : ''} ${!isAuth && !isAuthorized ? 'menu-item-lock' : ''}`}
  >
    { name }
  </button>
);

MainMenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  isUnderlined: PropTypes.bool,
  id: PropTypes.number,
  isAuthorized: PropTypes.bool,
  setPage: PropTypes.func.isRequired,
};

MainMenuItem.defaultProps = {
  isUnderlined: false,
  id: 0,
  isAuthorized: false,
};

export default MainMenu;
