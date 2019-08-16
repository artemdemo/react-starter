import React from 'react';
import Icon from '../../components/Icon/Icon';
import TestCss from '../../containers/TestCss/TestCss';

const MainView = () => {
    return (
        <React.Fragment>
            <div className='mb-3'>
                <Icon name='globe' />
                &nbsp;
                Main View
            </div>
            <div className='mb-3'>
                <TestCss />
            </div>
        </React.Fragment>
    );
};

export default MainView;
