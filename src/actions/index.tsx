import _ from "lodash";

import { getArticles } from "../services/apiService";
import { FEED_SOURCES } from "../helpers/apiConfig";
import {
  CLEAR_DATA,
  GET_NEWS_ARTICLES,
  GET_SEARCH_RESULTS,
  SET_CATEGORY,
  SHOW_MENU,
  SHOW_MORE_ITEMS,
  SET_FEED_DATA,
} from "./types";

export const getNewsArticles = (articles?: []) => ({
  payload: articles,
  type: GET_NEWS_ARTICLES,
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

export const startDataFeedFetch = () => (dispatch: any) => {
  let includedSources: string[] = [];

  if (process.env.REACT_APP_API_SOURCES) {
    includedSources = process.env.REACT_APP_API_SOURCES.split(",");
  }

  includedSources.forEach((item: string) => {
    Object.entries(FEED_SOURCES).forEach((entry: any) => {
      if (entry[0] === item) {
        getArticles(entry[1].FEED)
          .then((response) => {
            if (response.items) {
              dispatch(
                setFeedData(
                  Object.assign(
                    {
                      feedName: entry[0],
                      webLink: entry[1].WEB_LINK,
                      type: entry[1].TYPE,
                      name: entry[1].NAME,
                    },
                    { data: response.items }
                  )
                )
              );
            }
          })
          .catch((error) => {
            console.warn(error);
          });
      }
    });
  });
};

export const setFeedData = (data: any) => ({
  payload: data,
  type: SET_FEED_DATA,
});

export const getSearchResults = (articles: []) => ({
  payload: articles,
  type: GET_SEARCH_RESULTS,
});
