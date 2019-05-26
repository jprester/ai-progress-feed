import { mount } from 'enzyme';
import React from 'react';

import SearchInput from '../SearchInput';

let wrapped;

describe('SearchInput', () => {
  it('should show search input component with div container, button and input html element', () => {
    wrapped = mount(<SearchInput />);

    expect(wrapped.find('div.search-input-container').length).toEqual(1);
    expect(wrapped.find('input.search-input').length).toEqual(1);
    expect(wrapped.find('button.search-button').length).toEqual(1);

    wrapped.unmount();
  });
});
