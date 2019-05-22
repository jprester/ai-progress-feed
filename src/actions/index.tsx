import axios from 'axios';
import _ from 'lodash';
import { Dispatch } from 'redux';

import { CATEGORY } from '../helpers/apiConfig';
import { getTopHeadlines, searchAllArticles } from '../services/apiService';
import {
  CLEAR_DATA,
  GET_NEWS_ARTICLES,
  GET_SEARCH_RESULTS,
  SET_CATEGORY,
  SET_IS_FETCHING_FLAG,
  SHOW_MENU,
  SHOW_MORE_ITEMS,
  UPDATE_SEARCH_TEXT,
} from './types';

export const startNewsFetch = (category: string = CATEGORY.GENERAL) => (dispatch: Dispatch) => {
  dispatch(setIsFetchingFlag(true));
  getTopHeadlines(category)
    .then((response) => {
      const articles = _.get(response, ['data', 'articles'], []);

      if (articles.length) {
        dispatch(getNewsArticles(articles));
      }
    })
    .catch((error: {}) => {
      console.warn(error);
    })
    .finally(() => {
      dispatch(setIsFetchingFlag(false));
    });
};

export const getNewsArticles = (articles: []) => ({
  payload: articles,
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

export const setIsFetchingFlag = (isFetching: boolean) => ({
  payload: isFetching,
  type: SET_IS_FETCHING_FLAG,
});

export const fetchSearchData = (searchQuery: string) => (dispatch: any) =>
  searchAllArticles(searchQuery)
    .then((response) => {
      const articles = _.get(response, ['data', 'articles'], []);

      if (articles) {
        dispatch(getSearchResults(articles));
      }
    })
    .catch((error) => {
      console.warn(error);
    });

export const getSearchResults = (articles: []) => ({
  payload: articles,
  type: GET_SEARCH_RESULTS,
});
