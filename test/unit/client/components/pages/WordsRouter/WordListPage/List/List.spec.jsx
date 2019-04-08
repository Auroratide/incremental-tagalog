import React from 'react';
import { shallow } from 'Test/enzyme';

import List from 'Client/components/pages/WordsRouter/WordListPage/List';

describe('<List />', () => {
  it('should render', () => {
    expect(shallow(<List />)).toHaveLength(1);
  });
});