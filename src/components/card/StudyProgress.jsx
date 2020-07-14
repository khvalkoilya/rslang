import React from 'react';
import PropTypes from 'prop-types';

const StudyProgress = ({ current, level }) => {
  let max;
  switch (level) {
    case 'easy':
      max = 2;
      break;
    case 'good':
      max = 4;
      break;
    case 'hard':
      max = 6;
      break;
    default: max = 0;
  }
  const array = [];
  for (let i = 1; i <= max; i += 1) {
    array.push(<span key={i} className={`${i <= current ? 'card__progress__full-dot' : 'card__progress__empty-dot'}`} />);
  }
  return (
    <>
      <div className="card__progress">
        {array}
      </div>
      <div className="card__progress__study-word">
        {`${max === current ? 'Вы выучили слово! Если хотите его повторить еще раз, нажмите "Снова".' : ''}`}
      </div>
    </>
  );
};

StudyProgress.propTypes = {
  current: PropTypes.number,
  level: PropTypes.string,
};

StudyProgress.defaultProps = {
  current: 0,
  level: 'good',
};

export default StudyProgress;
