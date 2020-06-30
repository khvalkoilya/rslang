import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

const Input = ({
  word, wordLen, setWord, defaultVal,
}) => (
  <>
    {
      defaultVal.length
        ? (
          <div>{word}</div>
        ) : (
          <>
            <input
              style={{ width: `${wordLen * 19}px` }}
              className="card__input"
              type="text"
              onChange={useCallback((e) => setWord(e.target.value), [])}
            />
          </>
        )
    }
  </>
);

Input.propTypes = {
  word: PropTypes.string.isRequired,
  wordLen: PropTypes.number.isRequired,
  setWord: PropTypes.func.isRequired,
  defaultVal: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default Input;
