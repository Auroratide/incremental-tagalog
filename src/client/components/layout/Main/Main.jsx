import React from 'react';
import PropTypes from 'Client/prop-types';

import Container from 'Client/components/layout/Container';

import styles from './style';

const Main = ({ children }) =>
  <main role="main" className={styles.main}>
    <Container>
      {children}
    </Container>
  </main>;

Main.propTypes = {
  children: PropTypes.node
};

export default Main;