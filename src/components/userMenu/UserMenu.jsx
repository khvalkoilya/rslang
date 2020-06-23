import React, { useState } from 'react';
import PropTypes from 'prop-types';

const UserMenu = ({ isVisible }) => {
  const [visible, setVisible] = useState(false);
  const title = isVisible ? 'Меню' : 'Гость';
  return (
    <>
      <button type="button" onClick={() => setVisible(!visible)}>{title}</button>
      <div className={`user__menu ${visible ? 'block' : 'none'}`}>привет</div>
    </>
  );
};

UserMenu.propTypes = {
  isVisible: PropTypes.bool.isRequired,
};

export default UserMenu;
