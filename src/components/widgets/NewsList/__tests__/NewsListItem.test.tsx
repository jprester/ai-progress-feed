import { mount } from 'enzyme';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import NewsListItem from '../NewsListItem';

let wrapped;

describe('NewsListItem', () => {
  it('should show news list item html element with appropriate class', () => {
    wrapped = mount(<Router><NewsListItem /></Router>);

    expect(wrapped.find('li.news-list-item').length).toEqual(1);

    wrapped.unmount();
  });

  it('should show link for the list item', () => {
    wrapped = mount(<Router><NewsListItem /></Router>);

    expect(wrapped.find('a').length).toEqual(1);

    wrapped.unmount();
  });

  it('should show news list item title if data is passed correctly', () => {
    wrapped = mount(<Router><NewsListItem title="test" /></Router>);

    expect(wrapped.find('li.news-list-item').text()).toContain('test');

    wrapped.unmount();
  });

  it('should show image if the urlImage argument is passed', () => {
    wrapped = mount(<Router><NewsListItem urlToImage="test" /></Router>);

    expect(wrapped.find('li.news-list-item img').length).toEqual(1);

    wrapped.unmount();
  });
});
