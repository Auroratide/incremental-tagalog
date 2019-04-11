import React from 'react';
import PropTypes from 'Client/prop-types';
import Link from 'Client/components/core/Link';
import { renderIfElse } from 'Client/lib/render-if';
import classnames from 'classnames';
import styles from './style';

const Card = ({ to, children, className }) => renderIfElse(to, () =>
  <Link to={to} className={classnames(styles.card, styles.linked, className)}>
    {children}
  </Link>
).elseRender(() =>
  <div className={classnames(styles.card, className)}>
    {children}
  </div>
);

Card.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string
};

export default Card;