import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routing } from './Routing';
import { Header } from './Header';
import { AppProvider } from '../contexts/app/AppContext';
import Container from '../components/Container/Container';
import { HttpProvider } from '../contexts/http/HttpContext';

export const TestApp: React.FC = () => {
  return (
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
  );
};
