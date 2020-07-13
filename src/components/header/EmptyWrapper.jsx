import React from 'react';
import PropTypes from 'prop-types';

const EmptyWrapper = ({ visible, handler, changeState }) => (
  <div
    className={`empty__wrapper ${visible ? 'empty__wrapper_block' : ''}`}
    onMouseUpCapture={() => {
      handler();
      changeState();
    }}
  />
);

EmptyWrapper.propTypes = {
  visible: PropTypes.bool.isRequired,
  handler: PropTypes.func.isRequired,
  changeState: PropTypes.func.isRequired,
};

export default EmptyWrapper;
