import { mount } from 'enzyme';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Loader from '../../../common/Loader';
import NewsList from '../NewsList';
import NewsListItem from '../NewsListItem';
import ShowMoreButton from '../ShowMoreButton';

let wrapped;

const newsData = [{id: 'something', title: 'something'}, {id: 'something2', title: 'something2'}];

describe('NewsList', () => {
  it('should show loading component if no data is passed', () => {
    wrapped = mount(<Router><NewsList /></Router>);

    expect(wrapped.find('div.news-list-container').length).toEqual(0);
    expect(wrapped.find('div.loader').length).toEqual(1);

    wrapped.unmount();
  });

  it('should show news list container div if data is passed', () => {
    wrapped = mount(<Router><NewsList data={newsData} /></Router>);

    expect(wrapped.find('div.news-list-container').length).toEqual(1);
    expect(wrapped.find('div.loader').length).toEqual(0);

    wrapped.unmount();
  });

  it('should display show more button if count of data items is larger than listCount', () => {
    wrapped = mount(<Router><NewsList data={newsData} listCount={1}/></Router>);

    expect(wrapped.find(ShowMoreButton).length).toEqual(1);

    wrapped.unmount();
  });

  it('should not display show more button if count of data items is smaller than listCount', () => {
    wrapped = mount(<Router><NewsList data={newsData} listCount={5}/></Router>);

    expect(wrapped.find(ShowMoreButton).length).toEqual(0);

    wrapped.unmount();
  });

  it('should render correct number of items if data is passed', () => {
    wrapped = mount(<Router><NewsList data={newsData} /></Router>);

    expect(wrapped.find(NewsListItem).length).toEqual(newsData.length);

    wrapped.unmount();
  });
});
