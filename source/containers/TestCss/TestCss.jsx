import React from 'react';
import Select from '../../components/Select/Select';

import './TestCss.less';

class TestCss extends React.PureComponent {
    constructor(props) {
        super(props);

        this.showCssItem = {value: 'show-css', name: 'Show CSS message'};
        this.hideCssItem = {value: 'hide-css', name: 'Hide CSS message'};
        this.list = [
            {name: 'Select message'},
            this.showCssItem,
            this.hideCssItem,
        ];

        this.state = {
            selectedValue: this.showCssItem,
        };
    }

    render() {
        return (
            <div className='row'>
                <div className='col'>
                    <Select
                        value={this.state.selectedValue}
                        onChange={(selectedValue) => {
                            this.setState({ selectedValue });
                        }}
                        list={this.list}
                    />
                </div>
                <div className='col'>
                    {this.state.selectedValue === this.showCssItem ? (
                        <div className='test-css'>
                            This is custom component that helps test&nbsp;
                            <span className='test-css__mini'>css minification</span>.
                        </div>
                    ) : null}
                </div>
            </div>
        );
    }
}

export default TestCss;
