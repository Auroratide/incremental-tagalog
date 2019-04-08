import React from 'react';
import styles from './style';

const Footer = () =>
  <footer className={styles.footer}>
    <p>&copy; {new Date().getFullYear()} Timothy Foster, All Rights Reserved</p>
  </footer>;

export default Footer;