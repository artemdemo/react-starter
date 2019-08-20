import React from 'react';
import { Link } from 'react-router-dom';

const MainMenu = () => {
    return (
        <ul className='mt-3'>
            <li><Link to='/'>Main</Link></li>
            <li><Link to='/json'>JSON test</Link></li>
            <li><Link to='/campaigns'>Campaigns</Link></li>
            <li><Link to='/components'>Components</Link></li>
        </ul>
    );
};

export default MainMenu;
