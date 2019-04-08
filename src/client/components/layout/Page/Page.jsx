import React from 'react';
import PropTypes from 'Client/prop-types';

const Page = ({ children }) =>
  <div>
    {children}
  </div>;

Page.propTypes = {
  children: PropTypes.node
};

export default Page;