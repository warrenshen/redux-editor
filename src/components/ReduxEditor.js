import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from '../reducers';

import EditTab from './EditTab';

const store = createStore(rootReducer);

export default () => {
  return (
    <Provider store={store}>
      <EditTab />
    </Provider>
  );
}
