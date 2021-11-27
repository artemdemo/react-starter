import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { MainMenu } from './containers/MainMenu/MainMenu';
import Button, { EButtonAppearance } from '../components/Button/Button';

export const Header: React.FC = () => {
  const navigate = useNavigate();

  const goToThirdView = () => {
    navigate('/third');
  };

  return (
    <>
      <MainMenu />
      <p>
        <Button
          type="button"
          onClick={goToThirdView}
          appearance={EButtonAppearance.LIGHT}
        >
          <FontAwesomeIcon icon={faLink} />
          &nbsp; Open third page programmatically
        </Button>
      </p>
    </>
  );
};
