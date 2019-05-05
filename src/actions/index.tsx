import axios from 'axios';
import { Dispatch } from 'redux';

import { CATEGORY } from '../helpers/apiConfig';
import { getTopHeadlines, searchAllArticles } from '../services/apiService';
import {
  CLEAR_DATA,
  FETCH_NEWS,
  GET_NEWS_ARTICLES,
  GET_SEARCH_RESULTS,
  SET_CATEGORY,
  SHOW_MENU,
  SHOW_MORE_ITEMS,
  UPDATE_SEARCH_TEXT,
} from './types';

export const startNewsFetch = (category: string = CATEGORY.GENERAL) => (dispatch: Dispatch) => {
  getTopHeadlines(category)
    .then((response: {}) => {
      dispatch(getNewsArticles(response));
    })
    .catch((error) => {
      console.warn(error);
    });
};

export const getNewsArticles = (response: {}) => ({
  payload: response,
  type: GET_NEWS_ARTICLES,
});

export const updateSearchText = (text: string) => ({
  payload: text,
  type: UPDATE_SEARCH_TEXT,
});

export const clearData = () => ({
  type: CLEAR_DATA,
});

export const showMoreItems = () => ({
  type: SHOW_MORE_ITEMS,
});

export const setCategory = (category: string) => ({
  payload: category,
  type: SET_CATEGORY,
});

export const showMenu = (isVisible: boolean) => ({
  payload: isVisible,
  type: SHOW_MENU,
});

export const fetchSearchData = (searchQuery: string) => (dispatch: any) =>
  searchAllArticles(searchQuery)
    .then((response: any) => {
      dispatch(getSearchResults(response));
    })
    .catch((error) => {
      console.warn(error);
    });

export const getSearchResults = (response: {}) => ({
  payload: response,
  type: GET_SEARCH_RESULTS,
});
