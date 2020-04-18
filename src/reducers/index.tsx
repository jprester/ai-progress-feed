import {
  CLEAR_DATA,
  GET_NEWS_ARTICLES,
  GET_SEARCH_RESULTS,
  SET_CATEGORY,
  SET_IS_FETCHING_FLAG,
  SHOW_MENU,
  SHOW_MORE_ITEMS,
  UPDATE_SEARCH_TEXT,
} from "../actions/types";
import { CATEGORY } from "../helpers/apiConfig";

interface IState {
  category: string;
  isFetching: boolean;
  menuVisible: boolean;
  newsData: number[];
  newsListNumber: number;
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
  newsData: [],
  newsListNumber: 10,
  searchData: [],
  searchQuery: "",
};

export default (state: IState = INITIAL_STATE, action: IAction) => {
  switch (action.type) {
    case GET_NEWS_ARTICLES:
      return {
        ...state,
        newsData: action.payload,
        newsListNumber: 10,
      };

    case UPDATE_SEARCH_TEXT:
      return {
        ...state,
        searchQuery: action.payload,
      };

    case SET_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };

    case GET_SEARCH_RESULTS:
      return {
        ...state,
        newsListNumber: 10,
        searchData: action.payload,
      };

    case CLEAR_DATA:
      return {
        ...state,
        menuVisible: false,
        newsData: [],
        newsListNumber: 10,
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

    case SHOW_MORE_ITEMS:
      return {
        ...state,
        newsListNumber: state.newsListNumber + 10,
      };

    default:
      return state;
  }
};
