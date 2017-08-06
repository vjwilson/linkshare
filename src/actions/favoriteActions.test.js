import * as favoriteActions from '../actions/favoriteActions';
import * as types from './actionTypes';

describe('Favorite actions', () => {
  it('increments the favorite count by one', () => {
    const linkUrl = 'http://www.csszengarden.com';
    const expectedAction = {
      type: types.INCREMENT_FAVORITE_COUNT,
      linkUrl: linkUrl
    };

    const action = favoriteActions.incrementFavorites(linkUrl);

    expect(action).toEqual(expectedAction);
  });
});
