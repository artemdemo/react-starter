import React, { Component } from 'react';

const MainView = (props) => {
    return (
        <div className='container'>
            Main View
            {props.children}
        </div>
    );
}

export default MainView;
