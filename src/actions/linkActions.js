import * as types from './actionTypes';

export function incrementFavorites(linkUrl) {
  return { type: types.INCREMENT_FAVORITE_COUNT, linkUrl };
}
