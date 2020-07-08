import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

const Input = ({
  wordLen, setWord, setNextButton, completed, defaultVal, setDefaultVal,
}) => (
  <input
    // eslint-disable-next-line jsx-a11y/no-autofocus
    autoFocus
    onChangeCapture={useCallback(() => {
      let interval = null;
      if (!completed && defaultVal.length) {
        document.querySelector('.checked-word').classList.add('word-fade-full');
        interval = setTimeout(() => {
          setDefaultVal([]);
        }, 1000);
      }
      return () => clearTimeout(interval);
    })}
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
  wordLen: PropTypes.number.isRequired,
  setWord: PropTypes.func.isRequired,
  setNextButton: PropTypes.func.isRequired,
  setDefaultVal: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  defaultVal: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default Input;
