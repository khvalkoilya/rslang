import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './_userMenu.scss';

const UserMenu = ({ isVisible }) => {
  const [visible, setVisible] = useState(false);
  const Button = ({ title }) => <button type="button" onClick={() => setVisible(!visible)}>{title}</button>;
  Button.propTypes = {
    title: PropTypes.string.isRequired,
  };
  return (
    <>
      {isVisible ? <Button title="Меню пользователя" /> : <Button title="Гость" />}
      {visible && <div>привет</div>}
    </>
  );
};

UserMenu.propTypes = {
  isVisible: PropTypes.bool.isRequired,
};

export default UserMenu;
