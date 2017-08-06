import * as types from './actionTypes';

export function incrementFavorites(link) {
  return { type: types.INCREMENT_FAVORITE_COUNT, link };
}
