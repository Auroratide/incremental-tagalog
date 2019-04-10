import React from 'react';
import PropTypes from 'Client/prop-types';
import styles from './style';

const Card = ({ children }) =>
  <div className={styles.card}>
    {children}
  </div>;

Card.propTypes = {
  children: PropTypes.node
};

export default Card;