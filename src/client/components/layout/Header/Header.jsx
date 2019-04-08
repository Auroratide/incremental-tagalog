import React from 'react';
import styles from './style';

import Container from 'Client/components/layout/Container';

const Header = () =>
  <header className={styles.header}>
    <Container.nav>
      <span className={styles.title}>Tagalog Learner</span>
    </Container.nav>
  </header>;

export default Header;