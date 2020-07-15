import React from 'react';
import PropTypes from 'prop-types';

const AboutUsItem = ({ data, handler }) => (
  <div className="teammate" onFocus={() => handler()} current-date={data}>
    <img src={data.icon} alt="teammate" />
  </div>
);

AboutUsItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    icon: PropTypes.string,
    text: PropTypes.string,
  }).isRequired,
  handler: PropTypes.func.isRequired,
};
