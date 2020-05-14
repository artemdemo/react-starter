import React from "react";
import _omit from "lodash/omit"

export const FontAwesomeIcon = props => (
    <div data-mock="FontAwesomeIcon">
        {JSON.stringify(_omit(props, ['children']), null, 2)}
        {props.children}
    </div>
);
