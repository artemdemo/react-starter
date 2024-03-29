import React from 'react';
import classnames from 'classnames';

type TProps = {
  className?: string;
  sideContent?: React.ReactNode;
  'data-testid'?: string;
  children?: React.ReactNode;
};

export const Navbar: React.FC<TProps> = (props) => {
  return (
    <nav
      className={classnames(
        props.className,
        'navbar navbar-expand-lg navbar-light bg-light',
      )}
      data-testid={props['data-testid']}
    >
      <div className="container-fluid">
        <div className="navbar-nav" style={{ width: '100%' }}>
          {props.children}
        </div>
        <div className="d-flex">{props.sideContent}</div>
      </div>
    </nav>
  );
};
