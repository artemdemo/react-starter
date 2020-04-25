import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Navbar from '../../components/Navbar/Navbar';
import NavbarLink from '../../components/Navbar/NavbarLink';

const MainMenu = (props) => {
    return (
        <Navbar className={classnames(props.className, 'mb-3')}>
            {/* I need here `div` in order to support flex styling from the `Navbar` */}
            <div>
                <NavbarLink to='/'>Main</NavbarLink>
                <NavbarLink to='/campaigns'>Campaigns</NavbarLink>
                <NavbarLink to='/components'>Components</NavbarLink>
            </div>
            <div>
                <NavbarLink onClick={() => console.log(ENV)}>{ENV.version}</NavbarLink>
            </div>
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
