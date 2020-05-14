import React from 'react';
import _omit from 'lodash/omit';

const TransparentButton = props => (
    <button data-mock='TransparentButton'>
        {JSON.stringify(_omit(props, 'children'), null, 2)}
        {props.children}
    </button>
);

export default TransparentButton;
