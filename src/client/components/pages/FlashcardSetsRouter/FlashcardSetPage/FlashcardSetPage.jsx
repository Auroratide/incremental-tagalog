import React from 'react';
import PropTypes from 'Client/prop-types';
import FlashcardSets from 'Client/components/core/FlashcardSets';
import FlashcardSet from './FlashcardSet';

const FlashcardSetPage = ({ match }) =>
  <FlashcardSets.Consumer>{({ query }) => {
    const set = query.set(match.params.id) || {};
    return <FlashcardSet name={set.name} words={set.words} />;
  }}</FlashcardSets.Consumer>;

FlashcardSetPage.propTypes = {
  match: PropTypes.routerMatch.isRequired
};

export default FlashcardSetPage;