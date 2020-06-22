import React from 'react';
import PropTypes from 'prop-types';
import ProgressBar from '@ramonak/react-progress-bar';
import './_ProgressBar.scss';

const UserProgressBar = ({doneCards ,maxCards}) => {
  //const [number, changeNumber] = React.useState(currentCard);
  return  (
    <div className='userProgress'>
      <span className='numberCards'>15</span>
      <div className='userProgress-bar'>
        <ProgressBar bgcolor='#d1af6c' completed={60} height="24px" labelSize='0' borderRadius='0' baseBgColor='#fff'/>
      </div>
      <span className='numberCards'>25</span>
    </div>
  )
}

UserProgressBar.propTypes = {
  doneCards: PropTypes.number,
  maxCards: PropTypes.number,
}

UserProgressBar.defaultProps = {
  doneCards: 0,
  maxCards: 20,
}

export default UserProgressBar;
