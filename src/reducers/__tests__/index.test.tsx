import reducer from '../';
import {
  CLEAR_DATA,
  GET_NEWS_ARTICLES,
  GET_SEARCH_RESULTS,
  SET_CATEGORY,
  SET_IS_FETCHING_FLAG,
  SHOW_MENU,
  SHOW_MORE_ITEMS,
  UPDATE_SEARCH_TEXT,
} from '../../actions/types';

it('update search text', () => {
  const action = {
    payload: 'something',
    type: UPDATE_SEARCH_TEXT,
  };

  const newState = reducer({ searchQuery: '' }, action);

  expect(newState).toEqual({
    searchQuery: 'something',
  });
});

it('handles the actions of get news articles', () => {
  const action = {
    payload: [{
        content: 'some news content 1',
        date: '21.11.2017',
        id: 1,
        title: 'some news 1',
      }, {
        content: 'some news content 2',
        date: '22.11.2017',
        id: 2,
        title: 'some news 2',
    }],
    type: GET_NEWS_ARTICLES,
  };

  const newState = reducer({newsData: [] }, action);

  expect(newState).toEqual({
    newsData: [{
        content: 'some news content 1', date: '21.11.2017', id: 1, title: 'some news 1',
      }, {
        content: 'some news content 2', date: '22.11.2017', id: 2, title: 'some news 2',
      },
    ],
    newsListNumber: 10,
  });
});

it('handles the action for clearing data', () => {
  const action = {
    type: CLEAR_DATA,
  };

  const newState = reducer({
      menuVisible: true,
      newsData: [{
          content: 'some news content 1', date: '21.11.2017', id: 1, title: 'some news 1',
        }, {
          content: 'some news content 2', date: '22.11.2017', id: 2, title: 'some news 2',
        },
      ],
      newsListNumber: 20,
      searchData: [{
          content: 'some news content 1', date: '21.11.2017', id: 1, title: 'some news 1',
        }, {
          content: 'some news content 2', date: '22.11.2017', id: 2, title: 'some news 2',
        },
      ],
    }, action);

  expect(newState).toEqual({
      menuVisible: false,
      newsData: [],
      newsListNumber: 10,
      searchData: [],
    });
});

it('handles the action for updating search text', () => {
  const action = {
    payload: 'something',
    type: UPDATE_SEARCH_TEXT,
  };

  const newState = reducer({ searchQuery: '' }, action);

  expect(newState).toEqual({
    searchQuery: 'something',
  });
});

it('handles the action for setting the category', () => {
  const action = {
    payload: 'entertainment',
    type: SET_CATEGORY,
  };

  const newState = reducer({ category: '' }, action);

  expect(newState).toEqual({
    category: 'entertainment',
  });
});

it('handles the action for setting fetching data flag', () => {
  const action = {
    payload: true,
    type: SET_IS_FETCHING_FLAG,
  };

  const newState = reducer({ isFetching: false }, action);

  expect(newState).toEqual({
    isFetching: true,
  });
});

it('handles the action for getting search results', () => {
  const action = {
    payload: [{
        content: 'some news content 1', date: '21.11.2017', id: 1, title: 'some news 1',
      }, {
        content: 'some news content 2', date: '22.11.2017', id: 2, title: 'some news 2',
      }],
    type: GET_SEARCH_RESULTS,
  };

  const newState = reducer({ newsListNumber: 10, searchData: '' }, action);

  expect(newState).toEqual({
    newsListNumber: 10,
    searchData: [{
        content: 'some news content 1', date: '21.11.2017', id: 1, title: 'some news 1',
      }, {
        content: 'some news content 2', date: '22.11.2017', id: 2, title: 'some news 2',
      },
    ],
  });
});

it('handles the action for showing menu', () => {
  const action = {
    payload: true,
    type: SHOW_MENU,
  };

  const newState = reducer({ menuVisible: false }, action);

  expect(newState).toEqual({
    menuVisible: true,
  });
});

it('handles the action for showing more items', () => {
  const action = {
    type: SHOW_MORE_ITEMS,
  };

  const newState = reducer({ newsListNumber: 10 }, action);

  expect(newState).toEqual({
    newsListNumber: 20,
  });
});
