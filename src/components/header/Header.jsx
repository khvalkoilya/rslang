import React from 'react';
import MainMenu from '../mainMenu/MainMenu';
import UserMenu from '../userMenu/UserMenu';

const isAuth = true;

const Header = () => (
  <div className="header">
    <div className="header__logo" />
    <div className="header__main-menu">
      <MainMenu isAuth={isAuth} />
    </div>
    <div className="header__profile-menu">
      <UserMenu isAuth={isAuth} />
    </div>
  </div>
);

export default Header;
