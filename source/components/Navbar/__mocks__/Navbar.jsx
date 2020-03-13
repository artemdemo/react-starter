import React from 'react';
import _omit from 'lodash/omit';

const Navbar = props => (
    <div data-mock='Navbar'>
        {JSON.stringify(_omit(props, 'children'), null, 2)}
        {props.children}
    </div>
);

export default Navbar;
