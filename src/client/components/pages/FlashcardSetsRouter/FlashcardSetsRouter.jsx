import React from 'react';
import PropTypes from 'Client/prop-types';
import { Switch, Route } from 'react-router-dom';
import FlashcardSetPage from './FlashcardSetPage';

const FlashcardSetsRouter = ({ match }) =>
  <Switch>
    <Route path={`${match.path}/:id`} component={FlashcardSetPage} />
  </Switch>;

FlashcardSetsRouter.propTypes = {
  match: PropTypes.routerMatch
};

export default FlashcardSetsRouter;