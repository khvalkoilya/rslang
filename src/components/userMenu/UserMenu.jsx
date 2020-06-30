import React, { useState } from 'react';
import PropTypes from 'prop-types';
import UserMenuItem from '../userMenuItem/UserMenuItem';

const UserMenu = ({ isAuth }) => {
  const [visible, setVisible] = useState(false);
  const title = isAuth ? 'Меню' : 'Гость';
  return (
    <>
      <button type="button" className="user__menu__button" onClick={() => setVisible(!visible)}>
        <img src="../../assets/images/user.svg" alt="icon" />
        <span>{title}</span>
      </button>
      <div className={`user__menu ${visible ? 'block' : 'none'}`}>
        <UserMenuItem isAuth={isAuth} />
      </div>
    </>
  );
};

UserMenu.propTypes = {
  isAuth: PropTypes.bool.isRequired,
};

export default UserMenu;
// onMouseLeave={() => setVisible(!visible)}
