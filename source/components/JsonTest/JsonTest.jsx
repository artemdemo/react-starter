import React from 'react';
import data from './data.json';

const JsonTest = () => {
    return (
        <React.Fragment>
            <p>
                JSON import example:
            </p>
            <pre>
                {JSON.stringify(data, null, 2)}
            </pre>
        </React.Fragment>
    );
};

export default JsonTest;
