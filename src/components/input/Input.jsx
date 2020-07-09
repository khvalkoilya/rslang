import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  wordLen, setWord, setNextButton, completed, defaultVal, setDefaultVal,
}) => (
  <input
    onChangeCapture={() => {
      if (!completed && defaultVal.length) {
        setDefaultVal([]);
      }
    }}
    className="card__input"
    type="text"
    onChange={(e) => {
      const val = e.target.value;
      if (val.length === wordLen) {
        setNextButton(true);
      } else {
        setNextButton(false);
      }
      setWord(val);
    }}
  />
);

Input.propTypes = {
  wordLen: PropTypes.number.isRequired,
  setWord: PropTypes.func.isRequired,
  setNextButton: PropTypes.func.isRequired,
  setDefaultVal: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  defaultVal: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default Input;
