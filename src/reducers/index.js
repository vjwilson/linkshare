import { combineReducers } from 'redux';

import links from './linkReducer';

const rootReducer = combineReducers({
  links
});

export default rootReducer;
