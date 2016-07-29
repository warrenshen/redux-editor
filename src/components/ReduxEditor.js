import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';

import EditTab from './containers/EditTab';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default () => {
  return (
    <Provider store={store}>
      <EditTab />
    </Provider>
  );
}
