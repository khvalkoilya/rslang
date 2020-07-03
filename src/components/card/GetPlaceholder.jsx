import React from 'react';
import PropTypes from 'prop-types';

const CheckOnMatch = ({ defaultVal, completed }) => {
  if (defaultVal.length) {
    const mistakes = defaultVal.filter((item) => item.isCorrect === false);
    const percentOfMistakes = mistakes.length / defaultVal.length;
    const goodStyle = percentOfMistakes === 0 ? 'completed-word-letter' : 'true-letter';
    const badStyle = percentOfMistakes > 0.3 ? 'dangerous-mistake' : 'calm-mistake';

    const arr = defaultVal.map((item) => <span className={item.isCorrect ? goodStyle : badStyle}>{item.letter}</span>);

    return <div className="checked-word">{arr}</div>;
  }
  return <></>;
};

CheckOnMatch.propTypes = {
  defaultVal: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  completed: PropTypes.bool.isRequired,
};

export default CheckOnMatch;
