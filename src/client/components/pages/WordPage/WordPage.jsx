import React from 'react';
import PropTypes from 'Client/prop-types';
import Word from './Word';

const WordPage = ({ match }) =>
  <div>
    <p>Word Page for {match.params.id}</p>
    <Word word="salamat" definition="thank you" />
  </div>;

WordPage.propTypes = {
  match: PropTypes.routerMatch.isRequired
};

export default WordPage;