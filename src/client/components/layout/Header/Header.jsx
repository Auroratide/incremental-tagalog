import React from 'react';
import Link from 'Client/components/core/Link';
import styles from './style';

import Container from 'Client/components/layout/Container';

const Header = () =>
  <header className={styles.header}>
    <Container.nav>
      <Link to="/" className={styles.title}>Incremental Tagalog</Link>
    </Container.nav>
  </header>;

export default Header;