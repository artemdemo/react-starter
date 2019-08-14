import React from 'react';
import Icon from '../../components/Icon/Icon';
import TestCss from '../../components/TestCss/TestCss';

const MainView = () => {
    return (
        <React.Fragment>
            <Icon name='globe' />
            &nbsp;
            Main View
            <p>&nbsp;</p>
            <TestCss />
        </React.Fragment>
    );
};

export default MainView;
