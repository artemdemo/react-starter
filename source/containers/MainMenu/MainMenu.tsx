import React from 'react';
import classnames from 'classnames';
import Navbar from '../../components/Navbar/Navbar';
import NavbarLink from '../../components/Navbar/NavbarLink';

type TProps = {
    className: string;
};

type TState = {};

class MainMenu extends React.PureComponent<TProps, TState> {
    static defaultProps = {
        className: undefined,
    };

    handleVersionClick = () => {
        console.log(ENV);
    };

    render(): React.ReactNode {
        return (
            <Navbar className={classnames(this.props.className, 'mb-3')}>
                {/* I need here `div` in order to support flex styling from the `Navbar` */}
                <div>
                    <NavbarLink to='/'>Main</NavbarLink>
                    <NavbarLink to='/campaigns'>Campaigns</NavbarLink>
                    <NavbarLink to='/components'>Components</NavbarLink>
                </div>
                <div>
                    <NavbarLink onClick={this.handleVersionClick}>{ENV.version}</NavbarLink>
                </div>
            </Navbar>
        );
    }
}

export default MainMenu;
