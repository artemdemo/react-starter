/* eslint-disable class-methods-use-this */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlug} from '@fortawesome/free-solid-svg-icons';
import Button, { buttonAppearance, buttonSize } from '../../components/Button/Button';
import Select from '../../components/Select/Select';

class ComponentsView extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            selectItem1: undefined,
        };

        this.selectList = [
            {name: '1', value: '1'},
            {name: '2', value: '2'},
        ];
    }

    renderButtons() {
        return (
            <>
                <h3 className='mt-3'>Buttons</h3>
                <div className='row'>
                    <div className='col'>
                        <Button appearance={buttonAppearance.LIGHT}>Light</Button>&nbsp;
                        <Button appearance={buttonAppearance.DANGER}>Danger</Button>&nbsp;
                    </div>
                    <div className='col'>
                        <Button size={buttonSize.SM}>Primary small</Button>&nbsp;
                        <Button>Primary standard</Button>&nbsp;
                        <Button size={buttonSize.LG}>Primary large</Button>&nbsp;
                    </div>
                </div>
            </>
        );
    }

    renderSelect() {
        return (
            <>
                <h3 className='mt-3'>Select</h3>
                <div className='row'>
                    <div className='col'>
                        <div className='mb-3'>
                            Simple select (not controlled)<br />
                            <Select
                                list={this.selectList}
                            />
                        </div>
                        Simple select, with disabled item (not controlled)<br />
                        <Select
                            list={[
                                {name: '1', value: '1'},
                                {name: '2', value: '2', disabled: true},
                                {name: '3', value: '3'},
                            ]}
                        />
                    </div>
                    <div className='col'>
                        <div className='mb-3'>
                            With placeholder (not controlled)<br />
                            <Select
                                list={this.selectList}
                                placeholder='Select...'
                            />
                        </div>
                        With placeholder (controlled)<br />
                        <Select
                            list={this.selectList}
                            value={this.state.selectItem1}
                            onChange={(selectItem1) => {
                                this.setState({
                                    selectItem1,
                                }, () => {
                                    // eslint-disable-next-line no-console
                                    console.log(this.state.selectItem1);
                                });
                            }}
                            placeholder='Select...'
                        />
                    </div>
                </div>
            </>
        );
    }

    render() {
        return (
            <>
                <div className='mb-3'>
                    <FontAwesomeIcon icon={faPlug} />
                    &nbsp;
                    Components View
                </div>
                <div className='mb-3'>

                    {this.renderButtons()}

                    {this.renderSelect()}
                </div>
            </>
        );

    }
}

export default ComponentsView;
