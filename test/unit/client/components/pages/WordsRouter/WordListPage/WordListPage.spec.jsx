import React from 'react';
import { shallow } from 'Test/enzyme';

import WordListPage from 'Client/components/pages/WordsRouter/WordListPage';

describe('<WordListPage />', () => {
  it('should render', () => {
    expect(shallow(<WordListPage />)).toHaveLength(1);
  });
});