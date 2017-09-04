import * as linkActions from '../actions/dialogActions';
import * as types from './actionTypes';

describe('Add action', () => {
  it('opens the Add Link Dialog', () => {
    const expectedAction = {
      type: types.OPEN_ADD_LINK_DIALOG,
    };

    const action = linkActions.openAddLinkDialog();

    expect(action).toEqual(expectedAction);
  });
});
