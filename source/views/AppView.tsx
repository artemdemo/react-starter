import React from 'react';
import Container from '../components/Container/Container';

const AppView: React.FC = (props) => {

  return (
    <Container>
      {props.children}
    </Container>
  );
};


export default AppView;
