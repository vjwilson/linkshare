import initialState from './initialState';

describe('initialState constants', () => {
  it('should supply an array of 4 links', () => {
    expect(initialState.links).toHaveLength(4);
  });

  it('should start with a closed dialog', () => {
    expect(initialState.uiStates.isDialogOpen).toEqual(false);
  });
});
