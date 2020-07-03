import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

const Input = ({
  word, wordLen, setWord, defaultVal, setNextButton,
}) => (
  <input
    style={{ width: `${wordLen * 19}px` }}
    className="card__input"
    type="text"
    onChange={useCallback((e) => {
      const val = e.target.value;
      if (val.length === wordLen) {
        setNextButton(true);
      } else {
        setNextButton(false);
      }
      setWord(val);
    }, [])}
  />
);

Input.propTypes = {
  word: PropTypes.string.isRequired,
  wordLen: PropTypes.number.isRequired,
  setWord: PropTypes.func.isRequired,
  defaultVal: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  setNextButton: PropTypes.func.isRequired,
};

export default Input;
