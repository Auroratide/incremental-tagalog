import React from 'react';
import { shallow } from 'Test/enzyme';

import FlashcardSet from 'Client/components/pages/FlashcardSetsRouter/FlashcardSetPage/FlashcardSet';

describe('<FlashcardSet />', () => {
  it('should render', () => {
    expect(shallow(<FlashcardSet />)).toHaveLength(1);
  });
});