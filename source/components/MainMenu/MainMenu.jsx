import React from 'react';
import { Link } from 'react-router';

const MainMenu = () => {
    return (
        <ul className='mt-3'>
            <li><Link to='/'>Main page</Link></li>
            <li><Link to='/json'>JSON test page</Link></li>
            <li><Link to='/campaigns'>Campaigns page</Link></li>
        </ul>
    );
};

export default MainMenu;
