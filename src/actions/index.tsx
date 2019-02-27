import axios from 'axios';
import { Dispatch } from 'redux';

import { getTopHeadlines, searchAllArticles } from '../services/apiService';
import { FETCH_NEWS, GET_SEARCH_RESULTS, GET_NEWS_ARTICLES, UPDATE_SEARCH_TEXT, CLEAR_SEARCH_RESULTS } from './types';

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
