import React from 'react';
import { Link } from 'react-router';

const MainMenu = () => {
    return (
        <ul>
            <li><Link to='/'>Main page</Link></li>
            <li><Link to='/second'>Second page</Link></li>
        </ul>
    );
};

export default MainMenu;
