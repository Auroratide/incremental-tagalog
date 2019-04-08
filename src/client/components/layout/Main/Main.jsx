import React from 'react';
import PropTypes from 'Client/prop-types';

import Container from 'Client/components/layout/Container';

const Main = ({ children }) =>
  <main role="main">
    <Container>
      {children}
    </Container>
  </main>;

Main.propTypes = {
  children: PropTypes.node
};

export default Main;