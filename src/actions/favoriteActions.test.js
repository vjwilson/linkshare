import * as favoriteActions from '../actions/favoriteActions';
import * as types from './actionTypes';

describe('Favorite actions', () => {
  it('increments the favorite count by one', () => {
    const link = {
      linkUrl: 'clean-code',
      favorites: 10
    };
    const expectedAction = {
      type: types.INCREMENT_FAVORITE_COUNT,
      link: link
    };

    const action = favoriteActions.incrementFavorites(link);

    expect(action).toEqual(expectedAction);
  });
});
