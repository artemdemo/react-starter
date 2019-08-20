import React from 'react';
import Icon from '../../components/Icon/Icon';
import Button from '../../components/Button/Button';
import Select from '../../components/Select/Select';

const MainView = () => {
    return (
        <React.Fragment>
            <div className='mb-3'>
                <Icon name='plug' />
                &nbsp;
                Components View
            </div>
            <div className='mb-3'>

                <h3 className='mt-3'>Buttons</h3>
                <div className='row'>
                    <div className='col'>
                        <Button>Default</Button>&nbsp;
                        <Button danger>Danger</Button>&nbsp;
                    </div>
                    <div className='col'>
                        <Button primary sm>Primary small</Button>&nbsp;
                        <Button primary>Primary standard</Button>&nbsp;
                        <Button primary lg>Primary large</Button>&nbsp;
                    </div>
                </div>

                <h3 className='mt-3'>Select</h3>
                <div className='row'>
                    <div className='col'>
                        Simple select (not controlled)
                        <Select
                            list={[
                                {name: '1', value: '1'},
                                {name: '2', value: '2'},
                            ]}
                        />
                    </div>
                    <div className='col'>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default MainView;
