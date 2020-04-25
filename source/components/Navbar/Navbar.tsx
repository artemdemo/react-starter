import React from 'react';
import classnames from 'classnames';

type TProps = {
    className: string;
    children?: any;
};

const Navbar = (props: TProps) => {
    return (
        <nav className={classnames(
            props.className,
            'navbar navbar-expand-lg navbar-light bg-light',
        )}>
            <ul className='navbar-nav'>
                {props.children}
            </ul>
        </nav>
    );
};

Navbar.defaultProps = {
    className: undefined,
};

export default Navbar;
