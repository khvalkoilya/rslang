import React from 'react';
import PropTypes from 'prop-types';

const ReplaceBrackets = ({ text, completed, word }) => {
  const array = text.split(' ').map((item) => {
    if (item[0] === '<') {
      return <span className={`${completed ? 'card__brackets-guessed' : 'card__brackets'}`}>{completed ? `${word} ` : '[...] '}</span>;
    }
    return <span>{`${item} `}</span>;
  });
  return array;
};
ReplaceBrackets.propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  word: PropTypes.string.isRequired,
};

export default ReplaceBrackets;
