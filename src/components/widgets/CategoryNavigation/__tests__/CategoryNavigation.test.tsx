import { mount } from 'enzyme';
import React from 'react';

import CategoryNavigation from '../CategoryNavigation';

let wrapped;

describe('CategoryNavigation', () => {
  it('should show category component with div container', () => {
    wrapped = mount(<CategoryNavigation />);

    expect(wrapped.find('div.category-navigation-container').length).toEqual(1);
  });
});
