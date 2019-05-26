import { mount } from 'enzyme';
import React from 'react';

import ShowMoreButton from '../ShowMoreButton';

let wrapped;

describe('ShowMoreButton', () => {
  it('should display button element with show-more-button class', () => {
    wrapped = mount(<ShowMoreButton />);

    expect(wrapped.find('button.show-more-button').length).toEqual(1);

    wrapped.unmount();
  });
});
