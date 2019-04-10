import React from 'react';
import Card from 'Client/components/core/Card';
import styles from './style';

const HomePage = () =>
  <div className={styles['home-page']}>
    <Card to="/words">Index</Card>
  </div>;

export default HomePage;