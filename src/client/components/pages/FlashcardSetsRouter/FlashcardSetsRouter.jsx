import React from 'react';
import PropTypes from 'Client/prop-types';
import { Switch, Route } from 'react-router-dom';
import FlashcardSets from 'Client/components/core/FlashcardSets';
import FlashcardSetPage from './FlashcardSetPage';
import FlashcardSetsList from './FlashcardSetsList';

const FlashcardSetsRouter = ({ match }) =>
  <FlashcardSets.Provider>
    <Switch>
      <Route path={`${match.path}/:id`} component={FlashcardSetPage} />
      <Route exact path={match.path} component={FlashcardSetsList} />
    </Switch>
  </FlashcardSets.Provider>;

FlashcardSetsRouter.propTypes = {
  match: PropTypes.routerMatch
};

export default FlashcardSetsRouter;