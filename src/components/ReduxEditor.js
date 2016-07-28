import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from '../reducers';

import EditTab from './containers/EditTab';

const store = createStore(rootReducer);

export default () => {
  return (
    <Provider store={store}>
      <EditTab />
    </Provider>
  );
}
