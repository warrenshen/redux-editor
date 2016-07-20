import { combineReducers } from 'redux';

import caret from './caret';
import range from './range';
import story from './story';

export default combineReducers({
  caret,
  range,
  story,
});
