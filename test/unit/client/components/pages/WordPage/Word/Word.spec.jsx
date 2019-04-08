import React from 'react';
import { shallow } from 'Test/enzyme';

import Word from 'Client/components/pages/WordPage/Word/Word';

describe('<Word />', () => {
  it('should render', () => {
    expect(shallow(<Word />)).toHaveLength(1);
  });
});