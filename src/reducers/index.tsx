import { FETCH_NEWS } from '../actions/types';

const INITIAL_STATE = {
  newsData: []
};

export default (state = INITIAL_STATE, action:any) => {
  switch(action.type) {
    case FETCH_NEWS:
      return {
        ...state,
        newsData: action.payload,
      }
  }
  return state;
};