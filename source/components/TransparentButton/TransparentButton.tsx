import React from 'react';
import classnames from 'classnames';
import './TransparentButton.css';

type Props = {
  className?: string;
  onClick?: () => void;
};

export const TransparentButton: React.FC<Props> = (props) => (
  <button className={classnames('TransparentButton', props.className)} onClick={props.onClick}>
    {props.children}
  </button>
);
