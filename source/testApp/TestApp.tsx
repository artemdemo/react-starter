import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Routing } from './Routing';
import { Header } from './Header';
import { AppProvider } from '../contexts/AppContext';
import Container from '../components/Container/Container';
import store from './store';
import { TransProvider } from '../contexts/TransContext';
import en from '../translations/en.json';

export const TestApp: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <AppProvider appVersion={ENV.appVersion}>
          <TransProvider en={en}>
            <Container>
              <Header />
              <hr />
              <Routing />
            </Container>
          </TransProvider>
        </AppProvider>
      </Router>
    </Provider>
  );
};
