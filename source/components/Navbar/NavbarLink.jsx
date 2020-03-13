import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

const NavbarLink = (props) => {
    return (
        <li
            className={classnames({
                'nav-item': true,
                'active': props.active,
            })}
        >
            <Link
                className='nav-link'
                to={props.to}
            >
                {props.children}
            </Link>
        </li>
    );
};

NavbarLink.propTypes = {
    to: PropTypes.string.isRequired,
    active: PropTypes.bool,
};

NavbarLink.defaultProps = {
    active: false,
};

export default NavbarLink;
