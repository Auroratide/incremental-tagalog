import React from 'react';
import { shallow } from 'Test/enzyme';

import Dots from 'Client/components/pages/FlashcardSetsRouter/FlashcardSetPage/FlashcardSet/Dots';

describe('<Dots />', () => {
  it('should render', () => {
    expect(shallow(<Dots />)).toHaveLength(1);
  });
});