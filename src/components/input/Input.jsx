import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

const Input = ({
  wordLen, setWord, setNextButton, completed,
}) => (
  <input
    // eslint-disable-next-line jsx-a11y/no-autofocus
    autoFocus
    // kek={completed}
    // kek={completed}
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
      // e.target.setAttribute('kek', completed);
      // if (completed) {
      //   e.target.setAttribute('readonly', 'true');
      // }
    }, [])}
  />
);

Input.propTypes = {
  wordLen: PropTypes.number.isRequired,
  setWord: PropTypes.func.isRequired,
  setNextButton: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
};

export default Input;
