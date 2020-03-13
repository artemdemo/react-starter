import React from 'react';
import _omit from 'lodash/omit';

const NavbarLink = props => (
    <div data-mock='NavbarLink'>
        {JSON.stringify(_omit(props, 'children'), null, 2)}
        {props.children}
    </div>
);

export default NavbarLink;
