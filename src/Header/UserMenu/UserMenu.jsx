import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './_userMenu.scss';

const UserMenu = ({ isVisible }) => {
  const [visible, setVisible] = useState(false);
  const title = isVisible ? 'Меню пользователя' : 'Гость';
  return (
    <>
      <button type="button" onClick={() => setVisible(!visible)}>{title}</button>
      <div className={visible ? 'block' : 'none'}>привет</div>
    </>
  );
};

UserMenu.propTypes = {
  isVisible: PropTypes.bool.isRequired,
};

export default UserMenu;
