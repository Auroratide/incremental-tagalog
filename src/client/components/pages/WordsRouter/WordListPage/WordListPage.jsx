import React from 'react';
import Wordbase from 'Client/components/core/Wordbase';

const WordListPage = () =>
  <Wordbase.Consumer>{({ query }) =>
    <div>
      {query.all().map(word => <div key={word.id}>{word.tagalog}</div>)}
    </div>
  }</Wordbase.Consumer>;

export default WordListPage;