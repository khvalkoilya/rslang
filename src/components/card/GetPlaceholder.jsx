import React from 'react';
import PropTypes from 'prop-types';

const GetPlaceholder = ({
  defaultVal, setCompleted, completed, setDefaultVal,
}) => {
  if (defaultVal.length) {
    const mistakes = defaultVal.filter((item) => item.isCorrect === false);
    const percentOfMistakes = mistakes.length / defaultVal.length;
    const goodStyle = percentOfMistakes === 0 ? 'completed-word-letter' : 'true-letter';
    const badStyle = percentOfMistakes > 0.3 ? 'dangerous-mistake' : 'calm-mistake';

    const arr = defaultVal.map((item) => <span className={item.isCorrect ? goodStyle : badStyle}>{item.letter}</span>);
    if (arr.every((item) => item.props.className === 'completed-word-letter')) setCompleted(true);
    else setCompleted(false);
    return <div className={`checked-word ${completed ? 'completed-word' : 'word-fade'}`}>{arr}</div>;
  }
  return <></>;
};

GetPlaceholder.propTypes = {
  defaultVal: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  completed: PropTypes.bool.isRequired,
  setCompleted: PropTypes.func.isRequired,
  setDefaultVal: PropTypes.func.isRequired,
};

export default GetPlaceholder;
