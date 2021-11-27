import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './store';
import { AppView } from './views/AppView';
import { TestApp } from './testApp/TestApp';
import './styles/general.css';
import { AppProvider } from './testApp/contexts/AppContext';

render(
  <Provider store={store}>
    <AppProvider appVersion={ENV.appVersion}>
      <Router>
        <AppView>
          <TestApp />
        </AppView>
      </Router>
    </AppProvider>
  </Provider>,
  document.getElementById('app')
);
