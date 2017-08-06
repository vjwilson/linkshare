import initialState from './initialState';

describe('initialState constants', () => {
  it('should supply an empty array of links', () => {
console.log(initialState);
    expect(initialState.links).toHaveLength(0);
  });
});
