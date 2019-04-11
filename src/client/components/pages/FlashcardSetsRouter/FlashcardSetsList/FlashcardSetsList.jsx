import React from 'react';
import FlashcardSets from 'Client/components/core/FlashcardSets';
import Card from 'Client/components/core/Card';
import styles from './style';

const FlashcardSetsList = () =>
  <FlashcardSets.Consumer>{({ query }) =>
    <div className={styles.list}>
      {query.all().map(set => <Card key={set.id} className={styles.card} to={`/flashcard-sets/${set.id}`}>{set.name}</Card>)}
    </div>
  }</FlashcardSets.Consumer>;

export default FlashcardSetsList;