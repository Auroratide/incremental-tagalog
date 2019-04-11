import React from 'react';
import PropTypes from 'Client/prop-types';
import Button from 'Client/components/core/Button';
import Flashcard from './Flashcard';
import { useIncrementor } from './hooks';
import Wordbase from 'Client/components/core/Wordbase';
import styles from './style';

const FlashcardSet = ({ name, words = [] }) => {
  const [index, next, previous] = useIncrementor(words.length);

  return (
    <div className={styles['flashcard-set']}>
      <h1>{name}</h1>
      <Wordbase.Consumer>{({ query }) => {
        const word = query.word(words[index]) || {};
        return <Flashcard word={word.tagalog} definition={word.definition} />;
      }}</Wordbase.Consumer>
      <div className={styles.buttons}>
        <Button onClick={previous}>&lt;</Button>
        <Button onClick={next}>&gt;</Button>
      </div>
    </div>
  );
};

FlashcardSet.propTypes = {
  name: PropTypes.string,
  words: PropTypes.arrayOf(PropTypes.string)
};

export default FlashcardSet;