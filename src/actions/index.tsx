import axios from 'axios';
import { Dispatch } from 'redux';

import { getTopHeadlines } from '../services/apiService';
import { FETCH_NEWS, GET_NEWS_ARTICLES } from './types';

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
