import React from 'react';
import Icon from '../../components/Icon/Icon';
import JsonTest from '../../containers/JsonTest/JsonTest';

const MainView = () => {
    return (
        <>
            <div className='mb-3'>
                <Icon name='globe' />
                &nbsp;
                Main View
            </div>
            <hr />
            <JsonTest />
        </>
    );
};

export default MainView;
