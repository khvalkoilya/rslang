import React from 'react';
import MainMenu from './mainMenu/MainMenu';

import './Header.scss';

function Header() {
  return (
    <div className="header">
      <div className="header__logo" />
      <div className="header__main-menu"><MainMenu /></div>
      <div className="header__profile-menu" />
    </div>
  );
}

export default Header;
