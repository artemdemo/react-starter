import React, { Component } from 'react';

const AppView = (props) => {
    return (
        <div className='container'>
            {props.children}
        </div>
    );
};

export default AppView;
