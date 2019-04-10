import React from 'react';
import PropTypes from 'Client/prop-types';
import Link from 'Client/components/core/Link';

import styles from './style';

const List = ({ title, words = [] }) =>
  <div className={styles.list}>
    <h2>{title}</h2>
    <div>
      {words.map(word => <Link to={`/words/${word.id}`} key={word.id}>{word.tagalog}</Link>)}
    </div>
  </div>;

List.propTypes = {
  title: PropTypes.string,
  words: PropTypes.arrayOf(PropTypes.word)
};

export default List;