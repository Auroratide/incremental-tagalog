import React from 'react';
import PropTypes from 'Client/prop-types';

const Word = ({ word, definition }) =>
  <article>
    <h1>{word}</h1>
    <p>{definition}</p>
  </article>;

Word.propTypes = {
  word: PropTypes.string,
  definition: PropTypes.string
};

export default Word;