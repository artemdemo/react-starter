import React from 'react';
import Icon from '../../components/Icon/Icon';
import JsonTest from '../../containers/JsonTest/JsonTest';

const JsonView = () => {
    return (
        <React.Fragment>
            <p>
                <Icon name='gift' />
                &nbsp;
                JSON Test View
            </p>
            <JsonTest />
        </React.Fragment>
    );
};

export default JsonView;
