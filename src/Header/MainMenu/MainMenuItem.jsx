import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import MainMenuItemsValues from '../../Variables/MainMenuItemsName';
import './MainMenuItem.scss';

// function setPage()

const MainMenu = () => {
  const [actualPage, setActualPage] = useState(0);

  const setUnderlined = (e) => e.id === actualPage;

  const m = MainMenuItemsValues.map((word) => (
    <MainMenuItem
      name={word.name}
      isUnderlined={setUnderlined(word.id)}
      // isUnderlined={setUnderlined}
      id={word.id}
    />
  ));

  function setPage(id) {
    setActualPage(id);
  }

  // function setActualPage() {
  //   console.log('change')
  // }

  return (
    <div>
      {m}
    </div>
  );
};

const MainMenuItem = ({ name, isUnderlined, id }) => (
  <button
    type="button"
    onClick={useCallback(() => {
      console.log(id);
    }, [])}
    className={`menu-item ${isUnderlined ? 'menu-item-active' : null}`}
  >
    { name }
  </button>
);
MainMenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  isUnderlined: PropTypes.bool,
  id: PropTypes.number,
};

MainMenuItem.defaultProps = {
  isUnderlined: false,
  id: 0,
};

export default MainMenu;
