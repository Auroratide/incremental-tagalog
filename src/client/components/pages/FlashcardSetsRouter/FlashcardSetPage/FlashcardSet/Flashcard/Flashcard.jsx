import React from 'react';
import PropTypes from 'Client/prop-types';
import Card from 'Client/components/core/Card';
import { useToggler } from './hooks';
import classnames from 'classnames';
import styles from './style';

const Flashcard = ({ word, definition }) => {
  const [ definitionShowing, flip ] = useToggler();

  return <div className={classnames(styles.flashcard, { [styles['showing-definition']]: definitionShowing })}>
    <Card className={styles.front}>
      <p>{word}</p>
      <button className={styles['flip-button']} onClick={flip}>Flip</button>
    </Card>
    <Card className={styles.back}>
      <p>{definition}</p>
      <button className={styles['flip-button']} onClick={flip}>Flip</button>
    </Card>
  </div>;
};

Flashcard.propTypes = {
  word: PropTypes.string,
  definition: PropTypes.string
};

export default Flashcard;