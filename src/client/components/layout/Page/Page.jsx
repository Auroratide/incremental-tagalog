import React from 'react';
import PropTypes from 'Client/prop-types';

import Header from 'Client/components/layout/Header';

const Page = ({ children }) =>
  <div>
    <Header />
    <main>{children}</main>
  </div>;

Page.propTypes = {
  children: PropTypes.node
};

export default Page;