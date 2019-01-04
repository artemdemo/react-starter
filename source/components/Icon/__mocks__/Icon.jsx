import React from 'react';

const Icon = props => (
    <div data-mock='Icon'>
        name: {props.name}
        className: {props.className}
        style: {JSON.stringify(props.style, null, 2)}
    </div>
);

export default Icon;
