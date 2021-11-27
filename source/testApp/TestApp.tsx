import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Routing } from './Routing';
import { Header } from './Header';
import { AppProvider } from '../contexts/AppContext';
import Container from '../components/Container/Container';
import store from './store';

export const TestApp: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <AppProvider appVersion={ENV.appVersion}>
          <Container>
            <Header />
            <hr />
            <Routing />
          </Container>
        </AppProvider>
      </Router>
    </Provider>
  );
};
