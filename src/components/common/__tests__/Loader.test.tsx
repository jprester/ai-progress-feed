import { shallow } from 'enzyme';
import React from 'react';

import Loader from '../Loader';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<Loader />);
});

describe('Loader', () => {
  it('shows loader div', () => {
    expect(wrapped.find('div.loader').length).toEqual(1);
  });
});
