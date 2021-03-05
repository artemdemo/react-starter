import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLink} from '@fortawesome/free-solid-svg-icons';
import {useHistory} from 'react-router-dom';
import Container from '../../components/Container/Container';
import Button, {EButtonAppearance} from '../../components/Button/Button';
import MainMenu from '../../containers/MainMenu/MainMenu';

const AppView: React.FC = (props) => {
  let history = useHistory();

  const goToThirdView = () => {
    history.push('/third');
  };

  return (
    <Container>
      <MainMenu/>
      <p>
        <Button
          type='button'
          onClick={goToThirdView}
          appearance={EButtonAppearance.LIGHT}
        >
          <FontAwesomeIcon icon={faLink}/>
          &nbsp;
          Open third page programmatically
        </Button>
      </p>

      <hr/>

      {props.children}
    </Container>
  );
};


export default AppView;
