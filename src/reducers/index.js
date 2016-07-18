import { combineReducers } from 'redux';

import blocks from './blocks';
import caret from './caret';
import selection from './selection';

export default combineReducers({
  blocks,
  caret,
  selection,
});
