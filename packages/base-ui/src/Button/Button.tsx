import React, { ButtonHTMLAttributes } from 'react';
import classnames from 'classnames';

export enum EButtonAppearance {
  PRIMARY = 'primary',
  SUCCESS = 'success',
  DANGER = 'danger',
  LIGHT = 'light',
}

export enum EButtonSize {
  SM = 'sm',
  LG = 'lg',
}

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  sizeAppearance?: EButtonSize;
  appearance?: EButtonAppearance;
  block?: boolean;
  'data-testid'?: string;
}

/**
 * Button
 * @link https://getbootstrap.com/docs/4.0/components/buttons/
 */
export const Button: React.FC<IProps> = (props) => {
  const { className, sizeAppearance, block, appearance, ...rest } = props;
  const buttonClass = classnames(className, {
    btn: true,
    'btn-lg': EButtonSize.LG === sizeAppearance,
    'btn-sm': EButtonSize.SM === sizeAppearance,
    'btn-block': block,
    'btn-light': EButtonAppearance.LIGHT === appearance,
    'btn-primary': EButtonAppearance.PRIMARY === appearance || !appearance,
    'btn-danger': EButtonAppearance.DANGER === appearance,
  });
  return (
    <button className={buttonClass} {...rest}>
      {props.children}
    </button>
  );
};
