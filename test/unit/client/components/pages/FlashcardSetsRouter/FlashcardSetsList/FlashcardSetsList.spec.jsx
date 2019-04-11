import React from 'react';
import { shallow } from 'Test/enzyme';

import FlashcardSetsList from 'Client/components/pages/FlashcardSetsRouter/FlashcardSetsList';

describe('<FlashcardSetsList />', () => {
  it('should render', () => {
    expect(shallow(<FlashcardSetsList />)).toHaveLength(1);
  });
});