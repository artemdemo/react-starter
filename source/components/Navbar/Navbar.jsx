import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Navbar = (props) => {
    return (
        <nav className={classnames(
            props.className,
            'navbar navbar-expand-lg navbar-light bg-light',
        )}>
            <div className='collapse navbar-collapse'>
                <ul className='navbar-nav'>
                    {props.children}
                </ul>
            </div>
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
