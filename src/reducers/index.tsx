import {
  CLEAR_DATA,
  GET_NEWS_ARTICLES,
  GET_SEARCH_RESULTS,
  SET_CATEGORY,
  SHOW_MORE_ITEMS,
  UPDATE_SEARCH_TEXT,
} from '../actions/types';
import { CATEGORY } from '../helpers/apiConfig';

interface IState {
  newsData: number[];
  newsListNumber: number;
}

const INITIAL_STATE = {
  category: '',
  newsData: [],
  newsListNumber: 10,
  searchData: [],
  searchQuery: '',
};

export default (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case GET_NEWS_ARTICLES:
      return {
        ...state,
        newsData: action.payload.data.articles,
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
        searchData: action.payload.data.articles,
      };

    case CLEAR_DATA:
      return {
        ...state,
        newsData: [],
        newsListNumber: 10,
        searchData: [],
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
