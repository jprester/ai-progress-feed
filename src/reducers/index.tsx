import { GET_NEWS_ARTICLES } from '../actions/types';

interface IState {
  newsData: number[];
}

const INITIAL_STATE = {
  newsData: [],
};

export default (state: IState = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case GET_NEWS_ARTICLES:
      return {
        ...state,
        newsData: action.payload.data.articles,
      };
  }
  return state;
};
