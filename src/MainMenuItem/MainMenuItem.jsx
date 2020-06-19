import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import './MainMenuItem.scss';

const MainMenuItem = ({ name, isUnderlined }) => (
  <button
    type="button"
    onClick={useCallback(() => {}, [])}
    className={`menu-item ${isUnderlined ? 'menu-item-active' : null}`}
  >
    { name }
  </button>
);

MainMenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  isUnderlined: PropTypes.bool,
};

MainMenuItem.defaultProps = {
  isUnderlined: false,
};

export default MainMenuItem;
