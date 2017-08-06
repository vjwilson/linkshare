import * as favoriteActions from '../actions/favoriteActions';
import favoriteReducer from './favoriteReducer';

describe('Favorite reducer', function() {
  it.only('should increment the favorite count for a link', () => {
    const stateBefore = [
      {
        linkUrl: 'http://www.csszengarden.com',
        favorites: 10
      },
      {
        linkUrl: 'https://daringfireball.net',
        favorites: 15
      }
    ];
    const action = favoriteActions.incrementFavorites('http://www.csszengarden.com');
    const stateAfter = [
      {
        linkUrl: 'http://www.csszengarden.com',
        favorites: 11
      },
      {
        linkUrl: 'https://daringfireball.net',
        favorites: 15
      }
    ];

    const result = favoriteReducer(stateBefore, action);

    expect(result).toEqual(stateAfter);
  });
});