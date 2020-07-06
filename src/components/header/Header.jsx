import React, { useState } from 'react';
import MainMenu from '../mainMenu/MainMenu';
import UserMenu from '../userMenu/UserMenu';
import BurgerButton from '../burgerButton/BurgerButton';
import Logo from '../logo/Logo';

import EmptyWrapper from './listenerFucntion';

const isAuth = true;

const Header = () => {
  const [burgerState, setburgerState] = useState(false);
  const changeStateOfBurger = () => setburgerState(!burgerState);
  const currentBurgerState = burgerState;

  const [visible, setVisible] = useState(false);
  const Click = () => setVisible(!visible);
  return (
    <div className="header">
      <BurgerButton
        click={Click}
        burgerState={currentBurgerState}
        changeState={changeStateOfBurger}
      />
      <div className="header__logo">
        <Logo />
      </div>
      <nav className={`nav ${visible ? 'visible' : 'unvisible'}`}>
        <div className="header__main-menu">
          <MainMenu isAuth={isAuth} isNavVisible={Click} changeBurgerState={changeStateOfBurger} />
        </div>
        <div className="header__profile-menu">
          <UserMenu isAuth={isAuth} isNavVisible={Click} changeBurgerState={changeStateOfBurger} />
        </div>
      </nav>
      <EmptyWrapper changeState={changeStateOfBurger} visible={visible} handler={Click} />
    </div>
  );
};

export default Header;
