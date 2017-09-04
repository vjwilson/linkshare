import * as dialogActions from '../actions/dialogActions';
import dialogReducer from './dialogReducer';

describe('Dialog reducer', () => {
  it('should set the dialog flag to open', () => {
      const stateBefore = {
        isDialogOpen: false
      };
      const stateAfter = {
        isDialogOpen: true
      };

      const action = dialogActions.openAddLinkDialog();
      const result = dialogReducer(stateBefore, action);

      expect(result).toEqual(stateAfter);
    });
});