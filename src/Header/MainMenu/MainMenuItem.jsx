import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import MainMenuItemsValues from '../../Variables/MainMenuItemsName';
import './MainMenuItem.scss';
//import isAuth from ...
const isAuth = true;

const MainMenu = () => {
  const [actualPage, setActualPage] = useState(0);

  const setUnderlined = (e) => e.id === actualPage;

  const m = MainMenuItemsValues.map((word) => (
    <MainMenuItem
      name={word.name}
      isUnderlined={setUnderlined(word.id)}
      id={word.id}
      key={word.id}
      isAuthorized={word.isAuthorized}
    />
  ));

  // function setPage(id) {
  //   setActualPage(id);
  // }

  return (
    <div>
      {m}
    </div>
  );
};

const MainMenuItem = ({
  name, isUnderlined, id, isAuthorized,
}) => (
  <button
    type="button"
    onClick={useCallback(() => {
      console.log(id);
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
};

MainMenuItem.defaultProps = {
  isUnderlined: false,
  id: 0,
  isAuthorized: false,
};

export default MainMenu;
