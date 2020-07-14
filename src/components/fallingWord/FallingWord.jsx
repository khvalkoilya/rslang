import React from 'react';
import PropTypes from 'prop-types';

import './_fallingWord.scss';

const FallingWord = ({ word, animate }) => (
  <div className="currentWord animation" onAnimationEnd={animate}>
    {word}
  </div>
);

FallingWord.propTypes = {
  word: PropTypes.string.isRequired,
  animate: PropTypes.func.isRequired,
};

export default FallingWord;
