import React from 'react';
import { Link } from 'react-router-dom';

const MainMenu = () => {
    return (
        <ul className='mt-3'>
            <li><Link to='/'>Main page</Link></li>
            <li><Link to='/second'>Second page</Link></li>
        </ul>
    );
};

export default MainMenu;
