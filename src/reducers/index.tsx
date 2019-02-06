import { FETCH_NEWS } from '../actions/types';

interface State {
  newsData: number[];
}

const INITIAL_STATE = {
  newsData: []
};

export default (state: State = INITIAL_STATE, action: any) => {
  switch(action.type) {
    case FETCH_NEWS:
      return {
        ...state,
        newsData: action.payload,
      }
  }
  return state;
};