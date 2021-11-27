import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './store';
import { AppView } from './views/AppView';
import { TestApp } from './testApp/TestApp';
import './styles/general.css';

render(
  <Provider store={store}>
    <Router>
      <AppView>
        <TestApp />
      </AppView>
    </Router>
  </Provider>,
  document.getElementById('app')
);
