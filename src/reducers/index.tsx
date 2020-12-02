import {
  CLEAR_DATA,
  SHOW_MENU,
  UPDATE_SEARCH_TEXT,
  SET_FEED_DATA,
} from "../actions/types";
import { IState, IAction } from "../types/types";

const INITIAL_STATE = {
  menuVisible: false,
  feedData: [],
};

export default (state: IState = INITIAL_STATE, action: IAction) => {
  switch (action.type) {
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

    case SET_FEED_DATA:
      return {
        ...state,
        feedData: [...state.feedData, action.payload].sort((a, b) => {
          if (a.data[0].isoDate < b.data[0].isoDate) return 1;
          if (a.data[0].isoDate > b.data[0].isoDate) return -1;
          return 0;
        }),
      };

    default:
      return state;
  }
};
