import { GET_NEWS_ARTICLES, GET_SEARCH_RESULTS, UPDATE_SEARCH_TEXT, CLEAR_SEARCH_RESULTS } from '../actions/types';

interface IState {
  newsData: number[];
}

const INITIAL_STATE = {
  newsData: [],
  searchQuery: '',
  searchData: [],
};

export default (state: IState = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case GET_NEWS_ARTICLES:
      return {
        ...state,
        newsData: action.payload.data.articles,
      };

    case UPDATE_SEARCH_TEXT:
      return {
        ...state,
        searchQuery: action.payload,
      };

    case GET_SEARCH_RESULTS:
      return {
        ...state,
        searchData: action.payload.data.articles,
      };

    case CLEAR_SEARCH_RESULTS:
      return {
        ...state,
        searchData: [],
      };
  }

  return state;
};
