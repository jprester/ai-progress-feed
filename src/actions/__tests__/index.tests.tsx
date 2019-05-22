import { clearData, getNewsArticles, setCategory, setIsFetchingFlag, showMoreItems, updateSearchText } from '../';
import {
  CLEAR_DATA,
  GET_NEWS_ARTICLES,
  SET_CATEGORY,
  SET_IS_FETCHING_FLAG,
  SHOW_MORE_ITEMS,
  UPDATE_SEARCH_TEXT,
} from '../types';

describe('getNewsArticles', () => {
  it('has correct type', () => {
    const action = getNewsArticles();

    expect(action.type).toEqual(GET_NEWS_ARTICLES);
  });
});

describe('updateSearchText', () => {
  it('has correct type', () => {
    const action = updateSearchText();

    expect(action.type).toEqual(UPDATE_SEARCH_TEXT);
  });
});

describe('clearData', () => {
  it('has correct type', () => {
    const action = clearData();

    expect(action.type).toEqual(CLEAR_DATA);
  });
});

describe('showMoreItems', () => {
  it('has correct type', () => {
    const action = showMoreItems();

    expect(action.type).toEqual(SHOW_MORE_ITEMS);
  });
});

describe('setCategory', () => {
  it('has correct type', () => {
    const action = setCategory();

    expect(action.type).toEqual(SET_CATEGORY);
  });
});

describe('setIsFetchingFlag', () => {
  it('has correct type', () => {
    const action = setIsFetchingFlag();

    expect(action.type).toEqual(SET_IS_FETCHING_FLAG);
  });
});
