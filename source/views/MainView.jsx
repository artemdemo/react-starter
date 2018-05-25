import React from 'react';
import Icon from '../components/Icon/Icon';
import JsonTest from '../components/JsonTest/JsonTest';

const MainView = () => {
    return (
        <React.Fragment>
            <p>
                <Icon name='globe' />
                &nbsp;
                Main View
            </p>

            <JsonTest />
        </React.Fragment>
    );
};

export default MainView;
