import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './_userMenu.scss';

const UserMenu = ({ isVisible }) => {
  const [visible, setVisible] = useState(false);
  let title = 'Гость';
  if (isVisible) { title = 'Меню пользователя'; }
  return (
    <>
      <button type="button" onClick={() => setVisible(!visible)}>{title}</button>
      {visible && <div>привет</div>}
    </>
  );
};

UserMenu.propTypes = {
  isVisible: PropTypes.bool.isRequired,
};

export default UserMenu;
