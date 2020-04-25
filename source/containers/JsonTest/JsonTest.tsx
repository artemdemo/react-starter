import React from 'react';
import styled from 'styled-components';
import data from './data.json';

/*
 * There have been problems with importing json for certain versions of webpack.
 * Therefore I'm testing it to be sure that I can update to the latest version.
 */

const JsonContent = styled.pre`
    font-size: 0.8em;
    background: #f4f6f7;
    border: 1px solid #ECEFF1;
    padding: 5px 8px;
    border-radius: 3px;
    display: inline-block;
`;

const JsonTest = () => {
    return (
        <>
            <p>
                JSON import example:
            </p>
            <JsonContent>
                {JSON.stringify(data, null, 2)}
            </JsonContent>
        </>
    );
};

export default JsonTest;
