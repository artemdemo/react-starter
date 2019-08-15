import React from 'react';

export const Link = props => (
    <div data-mock='Link'>
        {JSON.stringify({
            to: props.to,
        }, null, 2)}
        {props.children}
    </div>
);

export const Router = props => (
    <div data-mock='Router'>
        {JSON.stringify({
            history: props.history,
        }, null, 2)}
        {props.children}
    </div>
);

export const Route = props => (
    <div data-mock='Router'>
        {JSON.stringify({
            exact: props.exact,
            path: props.path,
            component: props.component,
        }, null, 2)}
        {props.children}
    </div>
);
