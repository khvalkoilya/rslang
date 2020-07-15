import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AboutUsItem = ({ data, handler }) => {
  const bgImage = { backgroundImage: data.style.backgroundImage };
  const [activeTeammate, setActiveTeammate] = useState(false);
  return (
    <div
      className={`teammate ${activeTeammate ? 'active-teammate' : undefined}`}
      style={bgImage}
      onMouseUpCapture={() => {
        handler(data);
        setActiveTeammate(!activeTeammate);
      }}
    />
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
