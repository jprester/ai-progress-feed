import _ from "lodash";
import Parser from "rss-parser";
import { Dispatch } from "redux";

import { getArticles } from "../services/apiService";
import { SOURCES } from "../helpers/apiConfig";
import {
  CLEAR_DATA,
  GET_NEWS_ARTICLES,
  GET_SEARCH_RESULTS,
  SET_CATEGORY,
  SET_IS_FETCHING_FLAG,
  SHOW_MENU,
  SHOW_MORE_ITEMS,
  UPDATE_SEARCH_TEXT,
  GET_ARXIV_FEED_DATA,
  GET_YOUTUBE_FEED_DATA,
  GET_GOOGLE_FEED_DATA,
  GET_MICROSOFT_FEED_DATA,
  GET_OPENAI_FEED_DATA,
  GET_DEEPMIND_FEED_DATA,
} from "./types";

export const getNewsArticles = (articles?: []) => ({
  payload: articles,
  type: GET_NEWS_ARTICLES,
});

export const updateSearchText = (text?: string) => ({
  payload: text,
  type: UPDATE_SEARCH_TEXT,
});

export const clearData = () => ({
  type: CLEAR_DATA,
});

export const showMoreItems = () => ({
  type: SHOW_MORE_ITEMS,
});

export const setCategory = (category?: string) => ({
  payload: category,
  type: SET_CATEGORY,
});

export const showMenu = (isVisible: boolean) => ({
  payload: isVisible,
  type: SHOW_MENU,
});

export const setIsFetchingFlag = (isFetching?: boolean) => ({
  payload: isFetching,
  type: SET_IS_FETCHING_FLAG,
});

export const startFetchArxivFeed = () => (dispatch: any) =>
  getArticles(SOURCES.AI_PAPERS.ARXIV)
    .then((response) => {
      if (response.items) {
        dispatch(getArxivFeedData(response.items));
      }
    })
    .catch((error) => {
      console.warn(error);
    });

export const startFetchMicrosoftFeed = () => (dispatch: any) =>
  getArticles(SOURCES.COMPANIES.MICROSOFT)
    .then((response) => {
      if (response.items) {
        dispatch(getMicrosoftFeedData(response.items));
      }
    })
    .catch((error) => {
      console.warn(error);
    });

export const startFetchOpenAIFeed = () => (dispatch: any) =>
  getArticles(SOURCES.COMPANIES.OPENAI)
    .then((response) => {
      if (response.items) {
        dispatch(getOpenAIFeedData(response.items));
      }
    })
    .catch((error) => {
      console.warn(error);
    });

export const startFetchDeepMindFeed = () => (dispatch: any) =>
  getArticles(SOURCES.COMPANIES.DEEPMIND)
    .then((response) => {
      if (response.items) {
        dispatch(getDeepMindFeedData(response.items));
      }
    })
    .catch((error) => {
      console.warn(error);
    });

export const startNewsFetch = () => (dispatch: Dispatch) => {
  dispatch(setIsFetchingFlag(true));
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => {
      const articles = _.get(response, ["data", "articles"], []);

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

export const getArxivFeedData = (data: any) => ({
  payload: data,
  type: GET_ARXIV_FEED_DATA,
});

export const getYoutubeFeedData = (data: any) => ({
  payload: data,
  type: GET_YOUTUBE_FEED_DATA,
});

export const getGoogleFeedData = (data: any) => ({
  payload: data,
  type: GET_GOOGLE_FEED_DATA,
});

export const getMicrosoftFeedData = (data: any) => ({
  payload: data,
  type: GET_MICROSOFT_FEED_DATA,
});

export const getOpenAIFeedData = (data: any) => ({
  payload: data,
  type: GET_OPENAI_FEED_DATA,
});

export const getDeepMindFeedData = (data: any) => ({
  payload: data,
  type: GET_DEEPMIND_FEED_DATA,
});

export const getSearchResults = (articles: []) => ({
  payload: articles,
  type: GET_SEARCH_RESULTS,
});
