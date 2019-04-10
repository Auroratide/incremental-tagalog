import React from 'react';
import { shallow } from 'Test/enzyme';

import Card from 'Client/components/core/Card';

describe('<Card />', () => {
  it('should render', () => {
    expect(shallow(<Card />)).toHaveLength(1);
  });
});