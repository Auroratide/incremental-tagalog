import React from 'react';
import PropTypes from 'Client/prop-types';
import Query from './query';
import { get } from './api';

const WordbaseContext = React.createContext();

const Wordbase = {};

Wordbase.Provider = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: new Query()
    };
  }

  componentDidMount() {
    get().then(words => this.setState({
      query: new Query(words)
    }));
  }

  render() {
    const { children } = this.props;
    return <WordbaseContext.Provider value={{ query: this.state.query }}>
      {children}
    </WordbaseContext.Provider>;
  }
};

Wordbase.Provider.propTypes = {
  children: PropTypes.node
};

Wordbase.Consumer = WordbaseContext.Consumer;

export default Wordbase;