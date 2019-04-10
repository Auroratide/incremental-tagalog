import React from 'react';
import PropTypes from 'Client/prop-types';
import Link from 'Client/components/core/Link';

import styles from './style';

const List = ({ title, words = [] }) =>
  <div className={styles.list}>
    <h2>{title}</h2>
    <ul className={styles.words}>
      {words.map(word => <li key={word.id}>
        <Link to={`/words/${word.id}`}>{word.tagalog}</Link>
      </li>)}
    </ul>
  </div>;

List.propTypes = {
  title: PropTypes.string,
  words: PropTypes.arrayOf(PropTypes.word)
};

export default List;