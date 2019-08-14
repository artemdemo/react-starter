import React from 'react';

const Button = (props) => {
    const { type, className, lg, primary, danger, block } = props;

    return (
        <div data-mock='Button'>
            {JSON.stringify({
                type,
                className,
                lg,
                primary,
                danger,
                block,
            }, null, 2)}

            {props.children}
        </div>
    );
};

export default Button;
