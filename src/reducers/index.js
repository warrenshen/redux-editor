import { combineReducers } from 'redux';

import caret from './caret';
import selection from './selection';
import story from './story';

export default combineReducers({
  caret,
  selection,
  story,
});
