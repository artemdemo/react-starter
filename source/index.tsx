import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import './styles/general.css';
import store from './store';
import {TestApp} from './testApp/TestApp';

import AppView from './views/AppView';

render(
  <Provider store={store}>
    <AppView>
      <TestApp />
    </AppView>
  </Provider>,
  document.getElementById('app'),
);
