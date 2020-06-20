import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ wordLen, setWord }) => (
  <>
    {console.log(wordLen)}
    <input type="text" onChange={(e) => setWord(e.target.value)} />
  </>
);

Input.propTypes = {
  wordLen: PropTypes.number.isRequired,
  setWord: PropTypes.func.isRequired,
};

export default Input;
