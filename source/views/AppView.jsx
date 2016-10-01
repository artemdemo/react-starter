import React, { Component } from 'react';
import { Link } from 'react-router';
import history from '../history';

const AppView = (props) => {
    return (
        <div className='container'>
            <ul>
                <li><Link to='/'>Main page</Link></li>
                <li><Link to='/second'>Second page</Link></li>
            </ul>
            <p>
                <button type='button'
                        className='btn btn-default'
                        onClick={() => {
                            history.push('/third');
                        }}>
                    <span className='glyphicon glyphicon-link' />
                    &nbsp;
                    Open third page programmatically
                </button>
            </p>

            <hr />

            {props.children}
        </div>
    );
};

export default AppView;
