import React, {ButtonHTMLAttributes} from 'react';
import classnames from 'classnames';
import './TransparentButton.css';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const TransparentButton: React.FC<Props> = (props) => (
  <button className={classnames('TransparentButton', props.className)} onClick={props.onClick}>
    {props.children}
  </button>
);
