import React from 'react';
import PropTypes from 'Client/prop-types';
import Button from 'Client/components/core/Button';
import { useIncrementor } from './hooks';
import styles from './style';

const FlashcardSet = ({ name, words = [] }) => {
  const [index, increment, decrement] = useIncrementor(words.length);

  return (
    <div className={styles['flashcard-set']}>
      <h1>{name}</h1>
      <div className={styles.word}>{words[index]}</div>
      <div className={styles.buttons}>
        <Button onClick={decrement}>&lt;</Button>
        <Button onClick={increment}>&gt;</Button>
      </div>
    </div>
  );
};

FlashcardSet.propTypes = {
  name: PropTypes.string,
  words: PropTypes.arrayOf(PropTypes.string)
};

export default FlashcardSet;