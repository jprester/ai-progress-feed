import { mount, shallow } from 'enzyme';
import React from 'react';

import CategoryNavigation from '../CategoryNavigation';

let wrapped;

describe('CategoryNavigation', () => {
  it('should show category component with div container', () => {
    wrapped = shallow(<CategoryNavigation />);

    expect(wrapped.find('div.category-navigation-container').length).toEqual(1);
  });

  it('should display "no category links available" if not data is passed', () => {
    wrapped = mount(<CategoryNavigation />);

    expect(wrapped.find('li').length).toEqual(0);
    expect(wrapped.find('div.category-navigation-container p').text()).toContain('No category links available');

    wrapped.unmount();
  });
});
