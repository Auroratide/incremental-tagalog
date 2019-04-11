import React from 'react';
import { shallow } from 'Test/enzyme';

import FlashcardSetsRouter from 'Client/components/pages/FlashcardSetsRouter';

describe('<FlashcardSetsRouter />', () => {
  it('should render', () => {
    expect(shallow(<FlashcardSetsRouter />)).toHaveLength(1);
  });
});