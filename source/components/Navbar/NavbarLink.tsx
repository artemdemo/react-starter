import React from "react";
import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import TransparentButton from "../TransparentButton/TransparentButton";

const navItemCss = css`
    display: inline-block;
    padding: 0.5rem 0.5rem;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: rgba(0, 0, 0, 0.05);
    }
`;

const NavItem = styled.div`
    display: inline-block;
`;

const NavLinkSty = styled(NavLink)`
    ${navItemCss};
    color: inherit;

    &:hover {
        text-decoration: unset;
    }
`;

const ButtonItem = styled(TransparentButton)`
    ${navItemCss};
    line-height: inherit;
`;

type TProps = {
    to: string;
    exact: boolean;
    children?: any;
    onClick: (e?: any) => void;
}

type TState = {}

class NavbarLink extends React.PureComponent<TProps, TState> {
    static defaultProps = {
        to: undefined,
        onClick: undefined,
        exact: false,
    };

    renderChildren() {
        if (this.props.to) {
            return (
                // @ts-ignore
                <NavLinkSty
                    to={this.props.to}
                    exact={this.props.exact}
                >
                    {this.props.children}
                </NavLinkSty>
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
            <NavItem>
                {this.renderChildren()}
            </NavItem>
        );
    }
}

export default NavbarLink;
