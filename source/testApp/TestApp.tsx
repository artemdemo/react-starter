import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Routing } from './Routing';
import { Header } from './Header';
import { AppProvider } from '../contexts/app/AppContext';
import Container from '../components/Container/Container';
import store from './store';
import { HttpProvider } from '../contexts/http/HttpContext';
import axios from 'axios';

export const TestApp: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <AppProvider appVersion={ENV.appVersion}>
          <HttpProvider httpClient={axios}>
            <Container>
              <Header />
              <hr />
              <Routing />
            </Container>
          </HttpProvider>
        </AppProvider>
      </Router>
    </Provider>
  );
};
