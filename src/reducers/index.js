import { combineReducers } from 'redux';

import uiStates from './dialogReducer';
import links from './linkReducer';

const rootReducer = combineReducers({
  uiStates,
  links
});

export default rootReducer;
