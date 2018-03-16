import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

/**
 * Buttons
 *
 * @link https://getbootstrap.com/docs/4.0/components/buttons/
 */
const Button = (props) => {
    const { type, className, lg, primary, danger, block, onClick } = props;
    const buttonClass = classnames(className, {
        btn: true,
        'btn-lg': lg,
        'btn-block': block,
        'btn-light': !primary && !danger,
        'btn-primary': primary,
        'btn-danger': danger,
    });
    return (
        <button
            className={buttonClass}
            onClick={e => onClick && onClick(e)}
            type={type}
        >
            {props.children}
        </button>
    );
};

Button.propTypes = {
    type: PropTypes.string,
    className: PropTypes.string,
    lg: PropTypes.bool,
    primary: PropTypes.bool,
    danger: PropTypes.bool,
    block: PropTypes.bool,
    onClick: PropTypes.func,
};

Button.defaultProps = {
    type: 'submit',
    className: '',
    lg: false,
    primary: false,
    danger: false,
    block: false,
    onClick: null,
};

export default Button;
