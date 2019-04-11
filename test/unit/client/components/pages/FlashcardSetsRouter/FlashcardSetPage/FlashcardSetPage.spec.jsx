import React from 'react';
import { shallow } from 'Test/enzyme';

import FlashcardSetPage from 'Client/components/pages/FlashcardSetsRouter/FlashcardSetPage';

describe('<FlashcardSetPage />', () => {
  it('should render', () => {
    expect(shallow(<FlashcardSetPage />)).toHaveLength(1);
  });
});