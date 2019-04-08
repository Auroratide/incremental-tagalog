import React from 'react';
import PropTypes from 'Client/prop-types';

const WordPage = ({ match }) =>
  <div>Word Page for {match.params.id}</div>;

WordPage.propTypes = {
  match: PropTypes.routerMatch.isRequired
};

export default WordPage;