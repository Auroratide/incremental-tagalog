import React from 'react';
import Card from 'Client/components/core/Card';
import styles from './style';

const HomePage = () =>
  <div className={styles['home-page']}>
    <Card className={styles.card} to="/words">Index</Card>
    <Card className={styles.card} to="/flashcard-sets">Flashcards</Card>
  </div>;

export default HomePage;