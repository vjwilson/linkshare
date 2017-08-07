import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function linkReducer(state = initialState.links, action) {
  if (action.type === types.INCREMENT_FAVORITE_COUNT) {
    return state.map((link) => {
      if (link.linkUrl === action.linkUrl) {
        return {
          linkUrl: link.linkUrl,
          favorites: link.favorites + 1
        };
      } else {
        return link;
      }
    });
  }

  return state;
}
