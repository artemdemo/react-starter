import React, { Component } from 'react';
import history from '../history';
import Container from '../components/Container/Container';
import MainMenu from '../containers/MainMenu/MainMenu';

const AppView = (props) => {
    return (
        <Container>
            <MainMenu/>
            <p>
                <button type='button'
                        className='btn btn-default'
                        onClick={() => {
                            history.push('/third');
                        }}>
                    <span className='glyphicon glyphicon-link' />
                    &nbsp;
                    Open third page programmatically
                </button>
            </p>

            <hr />

            {props.children}
        </Container>
    );
};

export default AppView;
