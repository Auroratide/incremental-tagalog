import React from 'react';
import styles from './style';

import Container from 'Client/components/layout/Container';

const Footer = () =>
  <footer className={styles.footer}>
    <Container.p>&copy; {new Date().getFullYear()} Timothy Foster, All Rights Reserved</Container.p>
  </footer>;

export default Footer;