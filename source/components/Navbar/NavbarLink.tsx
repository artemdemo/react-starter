import React from 'react';
import {NavLink} from 'react-router-dom';
import styled, {css} from 'styled-components';
import TransparentButton from '../TransparentButton/TransparentButton';

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
  to?: string;
  exact?: boolean;
  children?: any;
  onClick?: (e?: any) => void;
}

export const NavbarLink: React.FC<TProps> = (props) => {
  const renderChildren = () => {
    if (props.to) {
      return (
        // @ts-ignore
        <NavLinkSty
          to={props.to}
          exact={props.exact}
        >
          {props.children}
        </NavLinkSty>
      );
    }
    return (
      <ButtonItem
        className='nav-link'
        onClick={props.onClick}
      >
        {props.children}
      </ButtonItem>
    );
  };

  return (
    <NavItem>
      {renderChildren()}
    </NavItem>
  );
};
