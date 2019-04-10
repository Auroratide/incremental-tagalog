import React from 'react';
import { shallow } from 'Test/enzyme';
import Link from 'Client/components/core/Link';

import Card from 'Client/components/core/Card';

describe('<Card />', () => {
  it('should render', () => {
    expect(shallow(<Card />)).toHaveLength(1);
  });

  it('should not use Link when to is not defined', () => {
    expect(shallow(<Card />).find(Link)).toHaveLength(0);
  });

  it('should use Link when to is defined', () => {
    expect(shallow(<Card to="/place" />).find(Link)).toHaveLength(1);
  });
});