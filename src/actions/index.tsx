import _ from "lodash";

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
  SET_ARXIV_FEED_DATA,
  SET_MICROSOFT_FEED_DATA,
  SET_OPENAI_FEED_DATA,
  SET_DEEPMIND_FEED_DATA,
  SET_NVIDIA_FEED_DATA,
  SET_GOOGLE_FEED_DATA,
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

export const startFetchArxivFeed = () => (dispatch: any) =>
  getArticles(SOURCES.AI_PAPERS.ARXIV)
    .then((response) => {
      if (response.items) {
        dispatch(setArxivFeedData(response.items));
      }
    })
    .catch((error) => {
      console.warn(error);
    });

export const startFetchMicrosoftFeed = () => (dispatch: any) =>
  getArticles(SOURCES.COMPANIES.MICROSOFT)
    .then((response) => {
      if (response.items) {
        dispatch(setMicrosoftFeedData(response.items));
      }
    })
    .catch((error) => {
      console.warn(error);
    });

export const startFetchOpenAIFeed = () => (dispatch: any) =>
  getArticles(SOURCES.COMPANIES.OPENAI)
    .then((response) => {
      if (response.items) {
        dispatch(setOpenAIFeedData(response.items));
      }
    })
    .catch((error) => {
      console.warn(error);
    });

export const startFetchDeepMindFeed = () => (dispatch: any) =>
  getArticles(SOURCES.COMPANIES.DEEPMIND)
    .then((response) => {
      if (response.items) {
        dispatch(setDeepMindFeedData(response.items));
      }
    })
    .catch((error) => {
      console.warn(error);
    });

export const startFetchNvidiaFeed = () => (dispatch: any) =>
  getArticles(SOURCES.COMPANIES.NVIDIA)
    .then((response) => {
      if (response.items) {
        dispatch(setNvidiaFeedData(response.items));
      }
    })
    .catch((error) => {
      console.warn(error);
    });

export const startFetchGoogleAIFeed = () => (dispatch: any) =>
  getArticles(SOURCES.COMPANIES.GOOGLE)
    .then((response) => {
      if (response.items) {
        dispatch(setGoogleFeedData(response.items));
      }
    })
    .catch((error) => {
      console.warn(error);
    });

export const startFetchYoutubeFeed = () => (dispatch: any) =>
  getArticles(SOURCES.YOUTUBE.TWO_MINUTE_PAPERS)
    .then((response) => {
      console.log("youtube data : ", response);
      if (response.items) {
        dispatch(setYoutubeData(response.items));
      }
    })
    .catch((error) => {
      console.warn(error);
    });

export const setArxivFeedData = (data: any) => ({
  payload: data,
  type: SET_ARXIV_FEED_DATA,
});

export const setMicrosoftFeedData = (data: any) => ({
  payload: data,
  type: SET_MICROSOFT_FEED_DATA,
});

export const setOpenAIFeedData = (data: any) => ({
  payload: data,
  type: SET_OPENAI_FEED_DATA,
});

export const setDeepMindFeedData = (data: any) => ({
  payload: data,
  type: SET_DEEPMIND_FEED_DATA,
});

export const setNvidiaFeedData = (data: any) => ({
  payload: data,
  type: SET_NVIDIA_FEED_DATA,
});

export const setGoogleFeedData = (data: any) => ({
  payload: data,
  type: SET_GOOGLE_FEED_DATA,
});

export const setYoutubeData = (data: any) => ({
  payload: data,
  type: "SET_YOUTUBE_DATA",
});

export const getSearchResults = (articles: []) => ({
  payload: articles,
  type: GET_SEARCH_RESULTS,
});
