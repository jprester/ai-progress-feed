import { shallow } from 'enzyme';
import React from 'react';

import Footer from '../Footer';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<Footer />);
});

describe('Footer', () => {
  it('shows footer content div', () => {
    expect(wrapped.find('div.footer-content').length).toEqual(1);
  });

  it('contains link for NewsAPI.org', () => {
    expect(wrapped.contains(<p>Powered by NewsAPI.org</p>)).toBeTruthy();
  });
});
