import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ChangePage from '../context/Context';

const MainMenuItem = ({
  name, isAuthorized, isAuth, link, icon, lock, isNavVisible, burgerState,
}) => {
  const { page, setPage } = useContext(ChangePage);

  return (
    <button
      type="button"
      onClick={isAuthorized || isAuth ? (() => {
        setPage(link);
        if (document.body.offsetWidth <= 600) {
          isNavVisible();
          burgerState();
        }
      }) : undefined}
      className={`menu-item ${link === page ? 'menu-item-active' : ''} ${!isAuth && !isAuthorized ? 'menu-item-lock' : ''}`}
    >
      <img src={icon} alt="icon" className="menu-item-icon" />
      { name }
      { !isAuth && lock && <img src={lock} alt="lock" className="lock" /> }
    </button>
  );
};

MainMenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  isAuthorized: PropTypes.bool,
  isAuth: PropTypes.bool.isRequired,
  lock: PropTypes.string,
  icon: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  burgerState: PropTypes.func.isRequired,
  isNavVisible: PropTypes.func.isRequired,
};

MainMenuItem.defaultProps = {
  isAuthorized: false,
  lock: '',
};

export default MainMenuItem;
