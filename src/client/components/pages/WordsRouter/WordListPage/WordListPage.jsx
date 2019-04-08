import React from 'react';
import Wordbase from 'Client/components/core/Wordbase';
import List from './List';

import styles from './style';

const WordListPage = () =>
  <Wordbase.Consumer>{({ query }) =>
    <div className={styles.lists}>
      <List title="A" words={query.startingWith('a').all()} />
      <List title="B" words={query.startingWith('b').all()} />
      <List title="C" words={query.startingWith('c').all()} />
      <List title="D" words={query.startingWith('d').all()} />
      <List title="E" words={query.startingWith('e').all()} />
      <List title="F" words={query.startingWith('f').all()} />
      <List title="G" words={query.startingWith('g').all()} />
      <List title="H" words={query.startingWith('h').all()} />
      <List title="I" words={query.startingWith('i').all()} />
      <List title="J" words={query.startingWith('j').all()} />
      <List title="K" words={query.startingWith('k').all()} />
      <List title="L" words={query.startingWith('l').all()} />
      <List title="M" words={query.startingWith('m').all()} />
      <List title="N" words={query.startingWith('n').all()} />
      <List title="O" words={query.startingWith('o').all()} />
      <List title="P" words={query.startingWith('p').all()} />
      <List title="Q" words={query.startingWith('q').all()} />
      <List title="R" words={query.startingWith('r').all()} />
      <List title="S" words={query.startingWith('s').all()} />
      <List title="T" words={query.startingWith('t').all()} />
      <List title="U" words={query.startingWith('u').all()} />
      <List title="V" words={query.startingWith('v').all()} />
      <List title="W" words={query.startingWith('w').all()} />
      <List title="X" words={query.startingWith('x').all()} />
      <List title="Y" words={query.startingWith('y').all()} />
      <List title="Z" words={query.startingWith('z').all()} />
    </div>
  }</Wordbase.Consumer>;

export default WordListPage;