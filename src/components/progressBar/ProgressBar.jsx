import React from 'react';
import PropTypes from 'prop-types';
import ProgressBar from '@ramonak/react-progress-bar';

const UserProgressBar = ({ doneCards, maxCards }) => (
  <div className="userProgress">
    <span className="numberCards">{doneCards}</span>
    <div className="userProgress-bar">
      <ProgressBar completed={(doneCards / maxCards) * 100} bgcolor="#d1af6c" height="24px" labelSize="0" borderRadius="0" baseBgColor="#fff" />
    </div>
    <span className="numberCards">{maxCards}</span>
  </div>
);

UserProgressBar.propTypes = {
  doneCards: PropTypes.number,
  maxCards: PropTypes.number,
};

UserProgressBar.defaultProps = {
  doneCards: 0,
  maxCards: 20,
};

export default UserProgressBar;
