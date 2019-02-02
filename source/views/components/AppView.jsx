import React from 'react';
import history from '../../history';
import Icon from '../../components/Icon/Icon';
import Container from '../../components/Container/Container';
import Button from '../../components/Button/Button';
import MainMenu from '../../components/MainMenu/MainMenu';

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
                    onClick={() => {
                        history.push('/third');
                    }}
                >
                    <Icon name='link' />
                    &nbsp;
                    Open third page programmatically
                </Button>
            </p>

            <hr />

            {props.children}
        </Container>
    );
};

export default AppView;
