import React from "react";
import _omit from "lodash/omit"

export const Link = props => (
    <div data-mock='Link'>
        {JSON.stringify(_omit(props, 'children'), null, 2)}
        {props.children}
    </div>
);

export const NavLink = props => (
    <div data-mock='NavLink'>
        {JSON.stringify(_omit(props, 'children'), null, 2)}
        {props.children}
    </div>
);

export const Router = props => (
    <div data-mock='Router'>
        {JSON.stringify(_omit(props, 'children'), null, 2)}
        {props.children}
    </div>
);

export const Route = props => (
    <div data-mock='Router'>
        {JSON.stringify(_omit(props, 'children'), null, 2)}
        {props.children}
    </div>
);
