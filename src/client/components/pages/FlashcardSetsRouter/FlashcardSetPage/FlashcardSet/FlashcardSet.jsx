import React from 'react';
import PropTypes from 'Client/prop-types';
import styles from './style';

const FlashcardSet = ({ name }) =>
  <div className={styles['flashcard-set']}>Flashcard Set: {name}</div>;

FlashcardSet.propTypes = {
  name: PropTypes.string
};

export default FlashcardSet;