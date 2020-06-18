import React from 'react';
import MainMenu from './MainMenu/MainMenuItem';

import './Header.scss';

function Header() {
  return (
    <div className="header">
      <div className="header__logo" />
      {/* <div className="header__main-menu" /> */}
      <MainMenu />
      <div className="header__profile-menu" />
    </div>
  );
}

export default Header;
