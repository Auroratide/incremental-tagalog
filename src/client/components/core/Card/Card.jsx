import React from 'react';
import PropTypes from 'Client/prop-types';
import Link from 'Client/components/core/Link';
import { renderIfElse } from 'Client/lib/render-if';
import classnames from 'classnames';
import styles from './style';

const Card = ({ to, children }) => renderIfElse(to, () =>
  <Link to={to} className={classnames(styles.card, styles.linked)}>
    {children}
  </Link>
).elseRender(() =>
  <div className={styles.card}>
    {children}
  </div>
);

Card.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node
};

export default Card;