import {
  CLEAR_DATA,
  GET_ARXIV_FEED_DATA,
  GET_MICROSOFT_FEED_DATA,
  GET_OPENAI_FEED_DATA,
  GET_DEEPMIND_FEED_DATA,
  SET_IS_FETCHING_FLAG,
  SHOW_MENU,
  UPDATE_SEARCH_TEXT,
} from "../actions/types";

interface IState {
  isFetching: boolean;
  menuVisible: boolean;
  arxivFeedData: number[];
  microsoftFeedData: number[];
  deepMindFeedData: number[];
  openAIFeedData: number[];
  searchData: number[];
  searchQuery: string;
}

interface IAction {
  type: string;
  payload: any;
}

const INITIAL_STATE = {
  category: "",
  isFetching: false,
  menuVisible: false,
  arxivFeedData: [],
  microsoftFeedData: [],
  deepMindFeedData: [],
  openAIFeedData: [],
  searchData: [],
  searchQuery: "",
};

export default (state: IState = INITIAL_STATE, action: IAction) => {
  switch (action.type) {
    case GET_ARXIV_FEED_DATA:
      return {
        ...state,
        arxivFeedData: action.payload,
      };

    case GET_MICROSOFT_FEED_DATA:
      return {
        ...state,
        microsoftFeedData: action.payload,
      };

    case GET_OPENAI_FEED_DATA:
      return {
        ...state,
        openAIFeedData: action.payload,
      };

    case GET_DEEPMIND_FEED_DATA:
      return {
        ...state,
        deepMindFeedData: action.payload,
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
        searchData: [],
      };

    case SET_IS_FETCHING_FLAG:
      return {
        ...state,
        isFetching: action.payload,
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
