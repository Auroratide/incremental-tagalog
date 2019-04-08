import React from 'react';
import styles from './style';

import Container from 'Client/components/layout/Container';

const Header = () =>
  <header className={styles.header}>
    <Container.nav>
      Tagalog Learner
    </Container.nav>
  </header>;

export default Header;