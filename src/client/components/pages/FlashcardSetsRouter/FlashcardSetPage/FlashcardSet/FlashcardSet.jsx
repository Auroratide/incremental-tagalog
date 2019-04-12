import React from 'react';
import PropTypes from 'Client/prop-types';
import Button from 'Client/components/core/Button';
import Flashcard from './Flashcard';
import { useIncrementor, useShuffler } from './hooks';
import Wordbase from 'Client/components/core/Wordbase';
import Dots from './Dots';
import styles from './style';

const FlashcardSet = ({ name, words }) => {
  const [index, next, previous] = useIncrementor(words.length);
  const [shuffledWords, shuffle] = useShuffler(words);

  return (
    <div className={styles['flashcard-set']}>
      <h1>{name}</h1>
      <Wordbase.Consumer>{({ query }) => {
        const word = query.word(shuffledWords[index]) || {};
        return <Flashcard word={word.tagalog} definition={word.definition} />;
      }}</Wordbase.Consumer>
      <div className={styles.buttons}>
        <Button onClick={previous}>&lt;</Button>
        <Dots number={shuffledWords.length} position={index} />
        <Button onClick={next}>&gt;</Button>
      </div>
      <div className={styles['shuffle-button-container']}>
        <Button onClick={shuffle}>Shuffle</Button>
      </div>
    </div>
  );
};

FlashcardSet.propTypes = {
  name: PropTypes.string,
  words: PropTypes.arrayOf(PropTypes.string)
};

FlashcardSet.defaultProps = {
  words: []
};

export default FlashcardSet;