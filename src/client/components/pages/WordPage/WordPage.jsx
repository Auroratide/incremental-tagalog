import React from 'react';
import PropTypes from 'Client/prop-types';
import Wordbase from 'Client/components/core/Wordbase';
import Word from './Word';

const WordPage = ({ match }) =>
  <Wordbase.Consumer>{({ query }) => {
    const word = query.word(match.params.id) || {};
    return <Word word={word.tagalog} definition={word.definition} />;
  }}</Wordbase.Consumer>;

WordPage.propTypes = {
  match: PropTypes.routerMatch.isRequired
};

export default WordPage;