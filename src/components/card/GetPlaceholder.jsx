import React from 'react';
import PropTypes from 'prop-types';

const GetPlaceholder = ({
  defaultVal, completed, skip,
}) => {
  if (defaultVal.length) {
    const mistakes = defaultVal.filter((item) => item.isCorrect === false);
    const percentOfMistakes = mistakes.length / defaultVal.length;
    const goodStyle = percentOfMistakes === 0 ? 'completed-word-letter' : 'true-letter';
    const badStyle = percentOfMistakes > 0.3 ? 'dangerous-mistake' : 'calm-mistake';
    const completedWordStyle = skip ? 'completed-word-false' : 'completed-word';
    const arr = defaultVal.map((item) => (
      <span key={Math.random(1000)} className={item.isCorrect ? goodStyle : badStyle}>
        {item.letter}
      </span>
    ));
    return <div className={`checked-word ${completed ? `${completedWordStyle}` : 'word-fade'}`}>{arr}</div>;
  }
  return <div className="checked-word" />;
};

GetPlaceholder.propTypes = {
  defaultVal: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  completed: PropTypes.bool.isRequired,
  skip: PropTypes.bool.isRequired,

};

export default GetPlaceholder;
