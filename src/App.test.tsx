import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { shallow, mount } from 'enzyme';

import App from './App';
import Root from './Root';
import NewsFeed from './containers/NewsFeed';

let wrapped;

it('shows a newsfeed', () => {
  wrapped = mount(<Root><Router><App /></Router></Root>);

  expect(wrapped.find(NewsFeed).length).toEqual(1);

  wrapped.unmount();
});
