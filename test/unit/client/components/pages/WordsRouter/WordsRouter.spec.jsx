import React from 'react';
import { shallow } from 'Test/enzyme';

import WordsRouter from 'Client/components/pages/WordsRouter';

describe('<WordsRouter />', () => {
  it('should render', () => {
    expect(shallow(<WordsRouter />)).toHaveLength(1);
  });
});