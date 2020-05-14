import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import history from '../../history';
import Container from '../../components/Container/Container';
import Button, { buttonAppearance } from '../../components/Button/Button';
import MainMenu from '../../containers/MainMenu/MainMenu';

// This is only test for dynamic import.
// Just to be sure that it is not broken with new `webpack` version
// or bacause of any other reason.
import('../../services/asyncService')
    .then(s => s.default());

const AppView = (props) => {
    return (
        <Container>
            <MainMenu />
            <p>
                <Button
                    type='button'
                    onClick={AppView.goToThirdView}
                    appearance={buttonAppearance.LIGHT}
                >
                    <FontAwesomeIcon icon={faLink} />
                    &nbsp;
                    Open third page programmatically
                </Button>
            </p>

            <hr />

            {props.children}
        </Container>
    );
};

AppView.goToThirdView = () => {
    history.push('/third');
};

export default AppView;
