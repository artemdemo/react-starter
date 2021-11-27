import React from 'react';
import {NavLink} from 'react-router-dom';
import TransparentButton from '../TransparentButton/TransparentButton';

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
        <NavLink
          className='nav-link'
          to={props.to}
          exact={props.exact}
          onClick={props.onClick}
        >
          {props.children}
        </NavLink>
      );
    }
    return (
      <TransparentButton
        className='nav-link'
        onClick={props.onClick}
      >
        {props.children}
      </TransparentButton>
    );
  };

  return (
    <span className='nav-item'>
      {renderChildren()}
    </span>
  );
};
