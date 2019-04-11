import React from 'react';
import { shallow } from 'Test/enzyme';

import FlashcardSets from 'Client/components/core/FlashcardSets';

describe('<FlashcardSets />', () => {
  it('should render', () => {
    expect(shallow(<FlashcardSets.Provider>
      <FlashcardSets.Consumer />
    </FlashcardSets.Provider>)).toHaveLength(1);
  });
});