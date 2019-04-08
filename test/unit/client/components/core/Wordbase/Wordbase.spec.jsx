import React from 'react';
import { shallow } from 'Test/enzyme';

import Wordbase from 'Client/components/core/Wordbase';

describe('<Wordbase />', () => {
  it('should render', () => {
    expect(shallow(<Wordbase />)).toHaveLength(1);
  });
});