import initialState from './initialState';

describe('initialState constants', () => {
  it('should supply an array of 4 links', () => {
    expect(initialState.links).toHaveLength(4);
  });
});
