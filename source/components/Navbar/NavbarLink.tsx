import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import TransparentButton from '../TransparentButton/TransparentButton';

const NavItem = styled.div`
    display: inline-block;
`;

const ButtonItem = styled(TransparentButton)`
    padding: .5rem 1rem;
    line-height: inherit;
`;

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
                // @ts-ignore
                <Link
                    className='nav-link'
                    to={this.props.to}
                >
                    {this.props.children}
                </Link>
            );
        }
        return (
            <ButtonItem
                className='nav-link'
                onClick={this.props.onClick}
            >
                {this.props.children}
            </ButtonItem>
        );
    }

    render() {
        return (
            <NavItem
                className={classnames({
                    'active': this.props.active,
                })}
            >
                {this.renderChildren()}
            </NavItem>
        );
    }
}

export default NavbarLink;
