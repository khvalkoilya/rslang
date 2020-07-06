import React from 'react';
import PropTypes from 'prop-types';

/* eslint-disable */
const EmptyWrapper = ({ visible, handler, changeState }) => (
  <div
    className={`empty__wrapper ${visible ? 'empty__wrapper_block' : ''}`}
    onClick={() => {
      handler();
      changeState();
    }}
  />
);
/* eslint-disable */

EmptyWrapper.propTypes = {
  visible: PropTypes.bool.isRequired,
  handler: PropTypes.func.isRequired,
  changeState: PropTypes.func.isRequired,
};

export default EmptyWrapper;
