import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Navbar from '../../components/Navbar/Navbar';
import NavbarLink from '../../components/Navbar/NavbarLink';

const MainMenu = (props) => {
    return (
        <Navbar className={classnames(props.className, 'mb-3')}>
            <NavbarLink to='/'>Main</NavbarLink>
            <NavbarLink to='/json'>JSON test</NavbarLink>
            <NavbarLink to='/campaigns'>Campaigns</NavbarLink>
            <NavbarLink to='/components'>Components</NavbarLink>
        </Navbar>
    );
};

MainMenu.propTypes = {
    className: PropTypes.string,
};

MainMenu.defaultProps = {
    className: undefined,
};

export default MainMenu;
