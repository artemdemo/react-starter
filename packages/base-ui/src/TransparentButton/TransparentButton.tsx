import React, { ButtonHTMLAttributes } from 'react';
import classnames from 'classnames';
import s from './TransparentButton.module.css';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const TransparentButton: React.FC<Props> = (props) => {
  return (
    <button
      {...props}
      className={classnames(s.TransparentButton, props.className)}
    >
      {props.children}
    </button>
  );
};
