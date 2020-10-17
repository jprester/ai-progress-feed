import {
  CLEAR_DATA,
  SET_ARXIV_FEED_DATA,
  SET_YOUTUBE_FEED_DATA,
  SET_MICROSOFT_FEED_DATA,
  SET_OPENAI_FEED_DATA,
  SET_DEEPMIND_FEED_DATA,
  SHOW_MENU,
  UPDATE_SEARCH_TEXT,
  SET_NVIDIA_FEED_DATA,
  SET_AMAZON_FEED_DATA,
  SET_GOOGLE_FEED_DATA,
} from "../actions/types";
import { IState, IAction } from "../types/types";

const INITIAL_STATE = {
  menuVisible: false,
  arxivFeedData: [],
  microsoftFeedData: [],
  deepMindFeedData: [],
  openAIFeedData: [],
  nvidiaFeedData: [],
  googleFeedData: [],
};

export default (state: IState = INITIAL_STATE, action: IAction) => {
  switch (action.type) {
    case SET_ARXIV_FEED_DATA:
      return {
        ...state,
        arxivFeedData: action.payload,
      };

    case SET_YOUTUBE_FEED_DATA:
      return {
        ...state,
        youtubeFeedData: action.payload,
      };

    case SET_MICROSOFT_FEED_DATA:
      return {
        ...state,
        microsoftFeedData: action.payload,
      };

    case SET_OPENAI_FEED_DATA:
      return {
        ...state,
        openAIFeedData: action.payload,
      };

    case SET_DEEPMIND_FEED_DATA:
      return {
        ...state,
        deepMindFeedData: action.payload,
      };

    case SET_NVIDIA_FEED_DATA:
      return {
        ...state,
        nvidiaFeedData: action.payload,
      };

    case SET_AMAZON_FEED_DATA:
      return {
        ...state,
        amazonFeedData: action.payload,
      };

    case SET_GOOGLE_FEED_DATA:
      return {
        ...state,
        googleFeedData: action.payload,
      };

    case UPDATE_SEARCH_TEXT:
      return {
        ...state,
        searchQuery: action.payload,
      };

    case CLEAR_DATA:
      return {
        ...state,
        menuVisible: false,
        articlesData: [],
      };

    case SHOW_MENU:
      return {
        ...state,
        menuVisible: action.payload,
      };

    default:
      return state;
  }
};
