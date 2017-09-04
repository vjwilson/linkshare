import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function dialogReducer(state = initialState.uiStates, action) {
  if (action.type === types.OPEN_ADD_LINK_DIALOG) {
    return Object.assign({}, state, { isDialogOpen: true });
  } else {
    return state;
  }
}
