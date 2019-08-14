import React from 'react';

const Button = props => (
    <div data-mock='Button'>
        {JSON.stringify(props, null, 2)}
    </div>
);

export default Button;
