import * as linkActions from '../actions/linkActions';
import linkReducer from './linkReducer';

describe('Favorite reducer', function() {
  it('should increment the favorite count for a link', () => {
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
    const action = linkActions.incrementFavorites('http://www.csszengarden.com');
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

    const result = linkReducer(stateBefore, action);

    expect(result).toEqual(stateAfter);
  });

  it('should not increment any favorite count if the link is not in the state', () => {
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
    const action = linkActions.incrementFavorites('http://www.buzzfeed.com');
    const stateAfter = [
      {
        linkUrl: 'http://www.csszengarden.com',
        favorites: 10
      },
      {
        linkUrl: 'https://daringfireball.net',
        favorites: 15
      }
    ];

    const result = linkReducer(stateBefore, action);

    expect(result).toEqual(stateAfter);
  });
});