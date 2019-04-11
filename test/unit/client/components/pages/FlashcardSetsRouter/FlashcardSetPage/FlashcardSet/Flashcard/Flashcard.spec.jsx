import React from 'react';
import { shallow } from 'Test/enzyme';

import Flashcard from 'Client/components/pages/FlashcardSetsRouter/FlashcardSetPage/FlashcardSet/Flashcard';

describe('<Flashcard />', () => {
  it('should render', () => {
    expect(shallow(<Flashcard />)).toHaveLength(1);
  });
});