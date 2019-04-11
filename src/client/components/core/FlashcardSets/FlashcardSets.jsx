import React from 'react';
import PropTypes from 'Client/prop-types';
import { get } from './api';
import Query from './query';

const FlashcardSetsContext = React.createContext();

const FlashcardSets = {};

FlashcardSets.Provider = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: new Query()
    };
  }

  componentDidMount() {
    get().then(flashcardSets => this.setState({
      query: new Query(flashcardSets)
    }));
  }

  render() {
    return <FlashcardSetsContext.Provider value={{ query: this.state.query }}>
      {this.props.children}
    </FlashcardSetsContext.Provider>;
  }
};

FlashcardSets.Provider.propTypes = {
  children: PropTypes.node
};

FlashcardSets.Consumer = FlashcardSetsContext.Consumer;

export default FlashcardSets;