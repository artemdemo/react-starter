import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Routing } from './Routing';
import { Header } from './Header';
import { AppProvider } from '../contexts/app/AppContext';
import Container from '../components/Container/Container';
import store from './store';
import { TransProvider } from '../contexts/trans/TransContext';
import en from '../translations/en.json';
import { HttpProvider } from '../contexts/http/HttpContext';
import axios from 'axios';

export const TestApp: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <AppProvider appVersion={ENV.appVersion}>
          <TransProvider en={en}>
            <HttpProvider httpClient={axios}>
              <Container>
                <Header />
                <hr />
                <Routing />
              </Container>
            </HttpProvider>
          </TransProvider>
        </AppProvider>
      </Router>
    </Provider>
  );
};
