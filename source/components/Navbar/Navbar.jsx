import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Navbar = (props) => {
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

Navbar.propTypes = {
    className: PropTypes.string,
};

Navbar.defaultProps = {
    className: undefined,
};

export default Navbar;
