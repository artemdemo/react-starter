import React, { Component } from 'react';

export class MainView extends Component {
    render() {
        return (
            <div className='container'>
                Main View
                {this.props.children}
            </div>
        );
    }
}
