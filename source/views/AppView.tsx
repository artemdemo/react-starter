import React from 'react';
import Container from '../components/Container/Container';

export const AppView: React.FC = (props) => {
  return (
    <Container>
      {props.children}
    </Container>
  );
};
