import { mount, shallow } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from '../App';
import NewsFeed from '../containers/NewsFeed';
import Root from '../Root';

let wrapped;

it('shows a newsfeed', () => {
  wrapped = mount(<Root><Router><App /></Router></Root>);

  expect(wrapped.find(NewsFeed).length).toEqual(1);

  wrapped.unmount();
});
