import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import TransparentButton from '../TransparentButton/TransparentButton';

type TProps = {
    to: string;
    active: boolean;
    children?: any;
    onClick: (e?: any) => void;
}

type TState = {}

class NavbarLink extends React.PureComponent<TProps, TState> {
    static defaultProps = {
        to: undefined,
        active: false,
        onClick: undefined,
    };

    renderChildren() {
        if (this.props.to) {
            return (
                <Link
                    className='nav-link'
                    to={this.props.to}
                >
                    {this.props.children}
                </Link>
            );
        }
        return (
            <TransparentButton
                className='nav-link'
                onClick={this.props.onClick}
            >
                {this.props.children}
            </TransparentButton>
        );
    }

    render() {
        return (
            <li
                className={classnames({
                    'nav-item': true,
                    'active': this.props.active,
                })}
            >
                {this.renderChildren()}
            </li>
        );
    }
}

export default NavbarLink;
