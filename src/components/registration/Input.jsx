import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  name, type, placeholder, icon,
}) => (
  <div className="reg__wrapper">
    <img className="reg__icon" src={icon} alt={icon} />
    <input className="reg__input" type={type} id={name} placeholder={placeholder} />
  </div>

);

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
export default Input;
