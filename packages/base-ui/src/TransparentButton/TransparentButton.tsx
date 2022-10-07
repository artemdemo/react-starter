import React, { ButtonHTMLAttributes } from 'react';
import classnames from 'classnames';
import './TransparentButton.module.css';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const TransparentButton: React.FC<Props> = (props) => {
  return (
    <button
      {...props}
      className={classnames('TransparentButton', props.className)}
    >
      {props.children}
    </button>
  );
};
