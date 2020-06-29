import React from 'react';
import PropTypes from 'prop-types';

const BurgerButton = ({ click }) => (
  <button type="button" className="nav__button" onClick={() => click()}>
    <img src="../../assets/images/menu.svg" alt="burger" className="burgerButton" />
  </button>
);

BurgerButton.propTypes = {
  click: PropTypes.func.isRequired,
};

export default BurgerButton;
