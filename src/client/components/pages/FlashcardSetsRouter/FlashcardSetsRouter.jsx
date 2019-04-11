import React from 'react';
import PropTypes from 'Client/prop-types';
import { Switch, Route } from 'react-router-dom';
import FlashcardSets from 'Client/components/core/FlashcardSets';
import FlashcardSetPage from './FlashcardSetPage';

const FlashcardSetsRouter = ({ match }) =>
  <FlashcardSets.Provider>
    <Switch>
      <Route path={`${match.path}/:id`} component={FlashcardSetPage} />
    </Switch>
  </FlashcardSets.Provider>;

FlashcardSetsRouter.propTypes = {
  match: PropTypes.routerMatch
};

export default FlashcardSetsRouter;