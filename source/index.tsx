import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import './styles/general.css';
import store from './store';
import {TestApp} from './testApp/TestApp';

import AppView from './views/AppView';

render(
  <Provider store={store}>
    <Router>
      <AppView>
        <TestApp />
      </AppView>
    </Router>
  </Provider>,
  document.getElementById('app'),
);
