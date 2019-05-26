import { shallow } from 'enzyme';
import React from 'react';
import { Link } from 'react-router-dom';

import SearchInputContainer from '../../../containers/SearchInputContainer';
import CategoryNavigation from '../../widgets/CategoryNavigation/CategoryNavigation';
import Header from '../Header';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<Header />);
});

describe('Header', () => {
  it('shows header content div', () => {
    expect(wrapped.find('div.header-container').length).toEqual(1);
  });

  it('shows search input', () => {
    expect(wrapped.find(SearchInputContainer).length).toEqual(1);
  });

  it('shows button', () => {
    expect(wrapped.find('button').length).toEqual(1);
  });

  it('has 2 links for logo and about', () => {
    expect(wrapped.find(Link).length).toEqual(2);
  });

  it('has category navigation widget', () => {
    expect(wrapped.find(CategoryNavigation).length).toEqual(1);
  });

  it('has a menu button with class mobile menu button', () => {
    expect(wrapped.find('.mobile-menu-button').length).toEqual(1);
  });

  it('has a menu button with class mobile menu button', () => {
    expect(wrapped.find('.mobile-menu-button').length).toEqual(1);
  });
});
