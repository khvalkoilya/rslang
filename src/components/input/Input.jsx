import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

const Input = ({
  word, setWord, defaultVal,
}) => (
  <>
    {
      defaultVal.length
        ? (
          <div>{word}</div>
        ) : (
          <input
            type="text"
            onChange={useCallback((e) => setWord(e.target.value), [])}
          />
        )
    }
  </>
);

Input.propTypes = {
  word: PropTypes.string.isRequired,
  setWord: PropTypes.func.isRequired,
  defaultVal: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default Input;
