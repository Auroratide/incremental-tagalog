import React from 'react';
import PropTypes from 'Client/prop-types';

import Header from 'Client/components/layout/Header';
import Main from 'Client/components/layout/Main';
import Footer from 'Client/components/layout/Footer';

const Page = ({ children }) =>
  <React.Fragment>
    <Header />
    <Main>{children}</Main>
    <Footer />
  </React.Fragment>;

Page.propTypes = {
  children: PropTypes.node
};

export default Page;