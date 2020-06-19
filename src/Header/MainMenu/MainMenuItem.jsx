import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import MainMenuItemsValues from '../../Variables/MainMenuItemsName';
import './MainMenuItem.scss';

const isAuth = true;

const MainMenu = () => {
  const [actualPage, setActualPage] = useState(0);

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
    onClick={useCallback(() => {
      setPage(id);
    }, [])}
    className={isAuth ? (`menu-item ${isUnderlined ? 'menu-item-active' : ''}`) : (`${isAuthorized ? 'menu-item' : 'menu-item-lock'}`)}
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
