import React from 'react';
import { shallow } from 'Test/enzyme';

import WordPage from 'Client/components/pages/WordsRouter/WordPage';

describe('<WordPage />', () => {
  it('should render', () => {
    expect(shallow(<WordPage />)).toHaveLength(1);
  });
});