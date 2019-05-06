import { mount, shallow } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from '../App';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import Root from '../Root';

let wrapped;

it('shows a header', () => {
  wrapped = mount(<Root><Router><App /></Router></Root>);

  expect(wrapped.find(Header).length).toEqual(1);

  wrapped.unmount();
});

it('shows a footer', () => {
  wrapped = mount(<Root><Router><App /></Router></Root>);

  expect(wrapped.find(Footer).length).toEqual(1);

  wrapped.unmount();
});
