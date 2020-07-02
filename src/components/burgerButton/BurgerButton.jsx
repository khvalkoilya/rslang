import React, { useState } from 'react';
import PropTypes from 'prop-types';

const BurgerButton = ({ click }) => {
  const [rotate, setRotate] = useState(false);
  return (
    <button
      type="button"
      className={`nav__burger__button ${rotate ? 'rotated' : ''}`}
      onClick={() => {
        click();
        setRotate(!rotate);
      }}
    >
      <img src="../../assets/images/menu.svg" alt="burger" className="burgerButton" />
    </button>
  );
};

BurgerButton.propTypes = {
  click: PropTypes.func.isRequired,
};

export default BurgerButton;
