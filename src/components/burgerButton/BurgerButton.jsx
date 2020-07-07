import React from 'react';
import PropTypes from 'prop-types';

const BurgerButton = ({ click, burgerState, changeState }) => (
  <button
    type="button"
    className={`nav__burger__button ${burgerState ? 'rotated' : ''}`}
    onClick={() => {
      click();
      changeState();
    }}
  >
    <img src="../../assets/images/menu.svg" alt="burger" className="burgerButton" />
  </button>
);

BurgerButton.propTypes = {
  click: PropTypes.func.isRequired,
  changeState: PropTypes.func.isRequired,
  burgerState: PropTypes.bool.isRequired,
};

export default BurgerButton;
