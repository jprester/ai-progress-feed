import {
  CLEAR_DATA,
  SHOW_MENU,
  UPDATE_SEARCH_TEXT,
  SET_FEED_DATA,
} from "../actions/types";
import { addOrUpdateObject } from "../helpers/utils";
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
      const updatedData =
        addOrUpdateObject(state.feedData, action.payload) || [];
      return {
        ...state,
        feedData: updatedData,
      };

    default:
      return state;
  }
};
