import React from 'react';
import s from './JsonTest.module.css';
import data from './data.json';

/*
 * There have been problems with importing json for certain versions of webpack.
 * Therefore I'm testing it to be sure that I can update to the latest version.
 */

export const JsonTest = () => {
  return (
    <>
      <p>JSON import example:</p>
      <pre className={s.JsonTest} data-testid="json-test">{JSON.stringify(data, null, 2)}</pre>
    </>
  );
};
