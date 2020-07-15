import React from 'react';
import PropTypes from 'prop-types';

const AboutUsItem = ({ data, handler }) => {
  const bgImage = { backgroundImage: data.style.backgroundImage };
  return (
    <div className="teammate" style={bgImage} onClick={() => handler(data)} />
  );
};

AboutUsItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    icon: PropTypes.string,
    text: PropTypes.string,
    style: PropTypes.object,
  }).isRequired,
  handler: PropTypes.func.isRequired,
};

export default AboutUsItem;
