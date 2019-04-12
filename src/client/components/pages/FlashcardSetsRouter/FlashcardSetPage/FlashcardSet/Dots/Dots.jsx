import React from 'react';
import PropTypes from 'Client/prop-types';
import classnames from 'classnames';
import { iterate } from 'Client/lib/arrays';
import styles from './style';

const Dots = ({ number, position }) =>
  <div className={styles.dots}>
    {iterate(number).map((_, i) =>
      <span className={classnames(styles.dot, {[styles.selected]: position === i})} key={i} />
    )}
  </div>;

Dots.propTypes = {
  number: PropTypes.number,
  position: PropTypes.number
};

export default Dots;