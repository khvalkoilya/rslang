import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';

import './MainMenuItem.scss';

const MainMenu = () => {
  const words = [
    {
      id: 1,
      name: 'Тренировка',
      isUnderlined: false,
    },
    {
      id: 2,
      name: 'Мини-Игры',
      isUnderlined: true,
    },
  ];

  const m = words.map((word) => (
    <MainMenuItem
      name={word.name}
      isUnderlined={word.isUnderlined}
      key={word.id}
    />
  ));
  // const m = words.map((word) => <MainMenuItem item={word, isUnderlined} key={word.id} />);
  return (
    <div>
      {m}
    </div>
  );
};

const MainMenuItem = ({ name, isUnderlined }) => (
  <button
    type="button"
    onClick={useCallback(() => {}, [])}
    className={`menu-item ${isUnderlined ? 'menu-item-active' : null}`}
  >
    { name }
  </button>
);
MainMenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  isUnderlined: PropTypes.bool,
};

MainMenuItem.defaultProps = {
  isUnderlined: false,
};

export default MainMenu;
