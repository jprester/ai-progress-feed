import axios from 'axios';
import { Dispatch } from 'redux';

import { getTopHeadlines, searchAllArticles } from '../services/apiService';
import {
  CLEAR_SEARCH_RESULTS,
  FETCH_NEWS,
  GET_NEWS_ARTICLES,
  GET_SEARCH_RESULTS,
  SHOW_MORE_ITEMS,
  UPDATE_SEARCH_TEXT,
} from './types';

export const startNewsFetch = () => (dispatch: Dispatch) =>
  getTopHeadlines()
    .then((response: {}) => {
      dispatch(getNewsArticles(response));
    })
    .catch((error) => {
      console.warn(error);
    });

export const getNewsArticles = (response: {}) => ({
  payload: response,
  type: GET_NEWS_ARTICLES,
});

export const updateSearchText = (text: string) => ({
  payload: text,
  type: UPDATE_SEARCH_TEXT,
});

export const clearSearchResults = () => ({
  type: CLEAR_SEARCH_RESULTS,
});

export const showMoreItems = () => ({
  type: SHOW_MORE_ITEMS,
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
