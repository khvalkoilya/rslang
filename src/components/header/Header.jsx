import React, { useState } from 'react';
import MainMenu from '../mainMenu/MainMenu';
import UserMenu from '../userMenu/UserMenu';
import BurgerButton from '../burgerButton/BurgerButton';
import Logo from '../logo/Logo';

const isAuth = false;

const Header = () => {
  const [visible, setVisible] = useState(false);
  const Click = () => setVisible(!visible);
  return (
    <div className="header">
      <BurgerButton click={Click} />
      <div className="header__logo">
        <Logo />
      </div>
      <nav className={`nav ${visible ? 'visible' : 'unvisible'}`}>
        <div className="header__main-menu">
          <MainMenu isAuth={isAuth} isNavVisible={Click} />
        </div>
        <div className="header__profile-menu">
          <UserMenu isAuth={isAuth} isNavVisible={Click} />
        </div>
      </nav>
    </div>
  );
};

export default Header;
