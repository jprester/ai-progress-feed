import { GET_NEWS_ARTICLES, GET_SEARCH_RESULTS, UPDATE_SEARCH_TEXT, CLEAR_SEARCH_RESULTS, SHOW_MORE_ITEMS } from '../actions/types';

interface IState {
  newsData: number[];
  newsListNumber: number;
}

const INITIAL_STATE = {
  newsData: [],
  newsListNumber: 10,
  searchData: [],
  searchQuery: '',
};

export default (state: IState = INITIAL_STATE, action: any) => {
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

    case GET_SEARCH_RESULTS:
      return {
        ...state,
        newsListNumber: 10,
        searchData: action.payload.data.articles,
      };

    case CLEAR_SEARCH_RESULTS:
      return {
        ...state,
        newsListNumber: 10,
        searchData: [],
      };

    case SHOW_MORE_ITEMS:
      return {
        ...state,
        newsListNumber: state.newsListNumber + 10,
      };
  }

  return state;
};
