import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { TransparentButton } from '../TransparentButton/TransparentButton';

type TProps = {
  className?: string;
  to?: string;
  onClick?: (e?: any) => void;
  dataTestid?: string;
  children?: React.ReactNode;
};

export const NavbarLink: React.FC<TProps> = (props) => {
  const className = classNames('nav-link', props.className);

  const renderChildren = () => {
    if (props.to) {
      return (
        <NavLink
          className={className}
          to={props.to}
          onClick={props.onClick}
          end
          data-testid={props.dataTestid}
        >
          {props.children}
        </NavLink>
      );
    }

    return (
      <TransparentButton
        className={className}
        onClick={props.onClick}
        data-testid={props.dataTestid}
      >
        {props.children}
      </TransparentButton>
    );
  };

  return <span className="nav-item">{renderChildren()}</span>;
};
