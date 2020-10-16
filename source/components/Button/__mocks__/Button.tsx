import React from 'react';
import _omit from 'lodash/omit';

export const EButtonAppearance = {
    PRIMARY: 'primary',
    DANGER: 'danger',
    LIGHT: 'light',
};

export const EButtonSize = {
    SM: 'sm',
    LG: 'lg',
};

const Button = (props) => {
    return (
        <div data-mock='Button'>
            {JSON.stringify(_omit(props, 'children'), null, 2)}
            {props.children}
        </div>
    );
};

export default Button;
