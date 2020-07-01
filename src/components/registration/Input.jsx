import React from 'react';
import PropTypes from 'prop-types';

const checkPassword = () => {
  const first = document.querySelector('.reg__input_password_first');
  const second = document.querySelector('.reg__input_password_second');
  const secondIcon = document.querySelector('.reg__password_second');
  if (first.value === second.value) {
    secondIcon.src = '../../assets/images/locked-padlock_green.svg';
  } else {
    secondIcon.src = '../../assets/images/locked-padlock_red.svg';
  }
};

const Input = ({
  name, type, placeholder, icon,
}) => (
  <div className="reg__wrapper">
    <img className={`reg__icon reg__${name}`} src={icon} alt={icon} />
    <input
      className={`reg__input reg__input_${name}`}
      type={type}
      id={name}
      placeholder={placeholder}
      pattern={name === 'password_first' ? '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[+-_@$!%*?&#.,;:[{}])[0-9a-zA-Z+-_@$!%*?&#.,;:[{}]{8,}' : undefined}
      title={name === 'password_first' ? 'Enter min 8 characters, [0-9], [a-z], [A-Z], [+-_@$!%*?&#.,;:[]{}]' : undefined}
      onInput={name === 'password_second' ? () => checkPassword() : undefined}
      required
    />
  </div>
);

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
export default Input;
