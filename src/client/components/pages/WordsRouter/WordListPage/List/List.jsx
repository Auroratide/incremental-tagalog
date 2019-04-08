import React from 'react';
import PropTypes from 'Client/prop-types';
import styles from './style';

const List = ({ title, words = [] }) =>
  <div className={styles.list}>
    <h2>{title}</h2>
    <div>
      {words.map(word => <div key={word.id}>{word.tagalog}</div>)}
    </div>
  </div>;

List.propTypes = {
  title: PropTypes.string,
  words: PropTypes.arrayOf(PropTypes.word)
};

export default List;