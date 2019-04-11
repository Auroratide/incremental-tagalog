import React from 'react';
import PropTypes from 'Client/prop-types';
import classnames from 'classnames';
import styles from './style';

const Button = ({ className, children, onClick }) =>
  <button className={classnames(styles.button, className)} onClick={onClick}>
    {children}
  </button>;

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func
};

export default Button;