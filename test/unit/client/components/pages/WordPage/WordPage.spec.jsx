import React from 'react';
import { shallow } from 'Test/enzyme';

import WordPage from 'Client/components/pages/WordPage/WordPage';

describe('<WordPage />', () => {
  let match;

  beforeEach(() => {
    match = {
      params: {
        id: 'word'
      }
    };
  });

  it('should render', () => {
    expect(shallow(<WordPage match={match} />)).toHaveLength(1);
  });
});