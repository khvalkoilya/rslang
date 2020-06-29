import React, { useCallback, useContext } from 'react';
import PropTypes from 'prop-types';
import Props from '../context/Context';

const MainMenuItem = ({
  name, isUnderlined, id, isAuthorized, setPages, isAuth, props,
}) => {
  const setPage = useContext(Props);
  return (
    <button
      type="button"
      onClick={isAuth ? useCallback(() => {
        setPages(id);
        setPage(props);
      }, []) : null}
      className={`menu-item ${isUnderlined ? 'menu-item-active' : ''} ${!isAuth && !isAuthorized ? 'menu-item-lock' : ''}`}
    >
      { name }
    </button>
  );
};

MainMenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  isUnderlined: PropTypes.bool,
  id: PropTypes.number,
  isAuthorized: PropTypes.bool,
  setPages: PropTypes.func.isRequired,
  isAuth: PropTypes.bool.isRequired,
  props: PropTypes.string.isRequired,
};

MainMenuItem.defaultProps = {
  isUnderlined: false,
  id: 0,
  isAuthorized: false,
};

export default MainMenuItem;
