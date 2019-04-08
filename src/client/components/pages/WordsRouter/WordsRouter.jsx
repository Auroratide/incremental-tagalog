import React from 'react';
import PropTypes from 'Client/prop-types';
import { Switch, Route } from 'react-router-dom';
import WordPage from './WordPage';
import WordListPage from './WordListPage';

const WordsRouter = ({ match }) =>
  <Switch>
    <Route path={`${match.path}/:id`} component={WordPage} />
    <Route exact path={match.path} component={WordListPage} />
  </Switch>;

WordsRouter.propTypes = {
  match: PropTypes.routerMatch
};

export default WordsRouter;