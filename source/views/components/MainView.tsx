import React from 'react';
import Icon from '../../components/Icon/Icon';
import TestCss from '../../containers/TestCss/TestCss';
import JsonTest from '../../containers/JsonTest/JsonTest';

const MainView = () => {
    return (
        <>
            <div className='mb-3'>
                <Icon name='globe' />
                &nbsp;
                Main View
            </div>
            <div className='mb-3'>
                <TestCss />
            </div>
            <hr />
            <JsonTest />
        </>
    );
};

export default MainView;
