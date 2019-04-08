import React from 'react';
import { shallow } from 'Test/enzyme';
import * as api from 'Client/components/core/Wordbase/api';

import Wordbase from 'Client/components/core/Wordbase';

describe('<Wordbase />', () => {
  it('should render', () => {
    jest.spyOn(api, 'get').mockResolvedValue([]);

    expect(shallow(<Wordbase.Provider>
      <Wordbase.Consumer></Wordbase.Consumer>
    </Wordbase.Provider>)).toHaveLength(1);
  });
});