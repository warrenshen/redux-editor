import React from 'react';
import ReactDOM from 'react-dom';

import ReduxEditor from './ReduxEditor';

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(
  <ReduxEditor />,
  document.getElementById('react-root')
);
