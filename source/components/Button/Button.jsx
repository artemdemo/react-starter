import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

export const buttonAppearance = {
    PRIMARY: 'primary',
    DANGER: 'danger',
    LIGHT: 'light',
};

export const buttonSize = {
    SM: 'sm',
    LG: 'lg',
};

/**
 * Button
 * @link https://getbootstrap.com/docs/4.0/components/buttons/
 */
const Button = (props) => {
    const { type, className, size, appearance, block, onClick } = props;
    const buttonClass = classnames(className, {
        btn: true,
        'btn-lg': buttonSize.LG === size,
        'btn-sm': buttonSize.SM === size,
        'btn-block': block,
        'btn-light': buttonAppearance.LIGHT === appearance,
        'btn-primary': buttonAppearance.PRIMARY === appearance,
        'btn-danger': buttonAppearance.DANGER === appearance,
    });
    return (
        <button
            className={buttonClass}
            onClick={onClick}
            type={type}
        >
            {props.children}
        </button>
    );
};

Button.propTypes = {
    type: PropTypes.string,
    className: PropTypes.string,
    size: PropTypes.oneOf(Object.values(buttonSize)),
    appearance: PropTypes.oneOf(Object.values(buttonAppearance)),
    block: PropTypes.bool,
    onClick: PropTypes.func,
};

Button.defaultProps = {
    type: 'submit',
    className: '',
    size: undefined,
    appearance: buttonAppearance.PRIMARY,
    block: false,
    onClick: undefined,
};

export default Button;
